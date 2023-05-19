import { NextResponse } from "next/server";
import prisma from "@/utils/prisma";
import { nanoid } from "nanoid";

export async function POST(req: Request) {
  const { url } = await req.json();

  const id = nanoid(9)

  const data = await prisma.url.create({
    data: {
      id,
      redirect_url: url
    }
  })

  return NextResponse.json({ message: 'success', data })
}