import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  let sid = request.cookies.get("sid")?.value;
  const isNew = !sid;
  if (!sid) sid = crypto.randomUUID();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-session-id", sid);

  const response = NextResponse.next({ request: { headers: requestHeaders } });

  if (isNew) {
    response.cookies.set("sid", sid, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 365 * 10,
      path: "/",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
