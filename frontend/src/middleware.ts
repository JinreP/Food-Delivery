import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const adminIds = ["user_36PDJkIY6RsUcqAoExKlCucMjvM"];

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();
  const pathname = req.nextUrl.pathname;

  if (!pathname.startsWith("/admin")) return;

  if (!userId) {
    return NextResponse.redirect(new URL("/client/login", req.url));
  }

  const isAdmin = adminIds.includes(userId);

  if (!isAdmin) {
    return new Response("Not authorized", { status: 403 });
  }
});

export const config = {
  matcher: ["/admin/:path*"],
};
