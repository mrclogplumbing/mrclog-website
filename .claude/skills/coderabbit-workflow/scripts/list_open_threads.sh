#!/usr/bin/env bash
# List unresolved review threads on a PR, one JSON object per line (JSONL).
# Usage: list_open_threads.sh [--owner OWNER] [--repo REPO] [--pr NUMBER]
# owner/repo default to the current directory's git remote; pr defaults to
# the PR associated with the current branch. Pass a flag to override any of them.
set -euo pipefail

OWNER=""
REPO=""
PR=""
CODERABBIT_AUTHOR="coderabbitai"

while [ $# -gt 0 ]; do
  case "$1" in
    --owner) OWNER="$2"; shift 2 ;;
    --repo) REPO="$2"; shift 2 ;;
    --pr) PR="$2"; shift 2 ;;
    *) echo "unknown argument: $1" >&2; exit 1 ;;
  esac
done

if [ -z "$OWNER" ] || [ -z "$REPO" ]; then
  read -r INFERRED_OWNER INFERRED_REPO < <(gh repo view --json owner,name -q '.owner.login + " " + .name')
  OWNER="${OWNER:-$INFERRED_OWNER}"
  REPO="${REPO:-$INFERRED_REPO}"
fi

if [ -z "$PR" ]; then
  PR=$(gh pr view --json number -q '.number')
fi

QUERY='
query($owner:String!, $repo:String!, $pr:Int!, $after:String) {
  repository(owner:$owner, name:$repo) {
    pullRequest(number:$pr) {
      reviewThreads(first:100, after:$after) {
        pageInfo { hasNextPage endCursor }
        nodes {
          id
          isResolved
          isOutdated
          path
          line
          comments(first:1) {
            nodes { author { login } body }
          }
        }
      }
    }
  }
}'

AFTER="null"
while : ; do
  RESP=$(gh api graphql -f query="$QUERY" -f owner="$OWNER" -f repo="$REPO" -F pr="$PR" -F after="$AFTER")
  echo "$RESP" | jq -c --arg author "$CODERABBIT_AUTHOR" '.data.repository.pullRequest.reviewThreads.nodes[]
    | select(.isResolved == false)
    | select(.comments.nodes[0].author.login == $author)
    | {id, path, line, outdated: .isOutdated,
       author: .comments.nodes[0].author.login,
       title: (.comments.nodes[0].body | split("\n") | map(select(length > 0)) as $lines
         | ($lines | map(select(startswith("**"))) | .[0]) // $lines[0] // "")}'
  HAS_NEXT=$(echo "$RESP" | jq -r '.data.repository.pullRequest.reviewThreads.pageInfo.hasNextPage')
  AFTER=$(echo "$RESP" | jq -r '.data.repository.pullRequest.reviewThreads.pageInfo.endCursor')
  [ "$HAS_NEXT" = "true" ] || break
done
