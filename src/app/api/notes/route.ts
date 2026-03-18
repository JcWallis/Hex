import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createNoteSchema } from "@/lib/validators/note";

export async function GET(req: NextRequest) {
  const sessionId = req.headers.get("x-session-id") ?? "";
  const { searchParams } = new URL(req.url);
  const workItemId = searchParams.get("workItemId");

  const notes = await prisma.note.findMany({
    where: { sessionId, ...(workItemId ? { workItemId } : {}) },
    include: { workItem: { select: { id: true, title: true } } },
    orderBy: { updatedAt: "desc" },
  });

  return NextResponse.json(notes);
}

export async function POST(req: NextRequest) {
  const sessionId = req.headers.get("x-session-id") ?? "";
  const body = await req.json();
  const parsed = createNoteSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  }

  const note = await prisma.note.create({ data: { ...parsed.data, sessionId } });
  return NextResponse.json(note, { status: 201 });
}
