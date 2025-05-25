import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
  matcher: [
    "/wishlist(.*)",
    "/gardens(.*)",
    "/bouquets(.*)",
    "/records(.*)",
    "/api/(.*)",
  ],
};
