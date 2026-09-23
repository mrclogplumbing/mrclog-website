#!/usr/bin/env bash
# Resolve one review thread (the thread `id` from list_open_threads.sh, e.g. PRRT_...).
# Usage: resolve_thread.sh <thread-id>
set -euo pipefail

THREAD_ID="${1:?thread id required (the \"id\" field from list_open_threads.sh, e.g. PRRT_...)}"

gh api graphql -f query='
mutation($threadId:ID!) {
  resolveReviewThread(input:{threadId:$threadId}) {
    thread { id isResolved }
  }
}' -f threadId="$THREAD_ID"
