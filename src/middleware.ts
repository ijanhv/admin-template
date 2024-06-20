import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest, res: NextResponse) {
  const cookies = req.cookies.get("token");


  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/products",
    "/products",
    "/customers",
    "/custom",
    "/orders",
    "/settings",
    "/shipment",
  ],
};
