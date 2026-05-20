import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body?.name || "").trim();
    const phone = String(body?.phone || "").trim();
    const problem = String(body?.problem || "").trim();

    if (!name || !phone || !problem) {
      return NextResponse.json(
        { ok: false, error: "Missing required fields" },
        { status: 400 }
      );
    }
    if (name.length > 200 || phone.length > 40 || problem.length > 2000) {
      return NextResponse.json(
        { ok: false, error: "Field too long" },
        { status: 400 }
      );
    }

    // For now, log the lead so it appears in Vercel function logs.
    // Hook up email/CRM here later (Resend, SendGrid, Zapier, etc.).
    console.log("[quote] new lead", {
      name,
      phone,
      problem: problem.slice(0, 200),
      ts: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request" },
      { status: 400 }
    );
  }
}
