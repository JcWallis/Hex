import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    APP_USERNAME_SET: !!process.env.APP_USERNAME,
    APP_USERNAME_VALUE: process.env.APP_USERNAME,
    APP_PASSWORD_HASH_SET: !!process.env.APP_PASSWORD_HASH,
    APP_PASSWORD_HASH_LENGTH: process.env.APP_PASSWORD_HASH?.length,
    APP_PASSWORD_HASH_START: process.env.APP_PASSWORD_HASH?.slice(0, 7),
    NEXTAUTH_SECRET_SET: !!process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  });
}
