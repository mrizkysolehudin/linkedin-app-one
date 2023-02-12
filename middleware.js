// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
	if (req.nextUrl.pathname === "/") {
		const session = await getToken({
			req,
			secret: process.env.JWT_SECRET,
			secureCookie: process.env.NODE_ENV === "production",
		});
		// You could also check for any property on the session object,
		// like role === "admin" or name === "John Doe", etc.
		if (!session)
			return NextResponse.redirect("https://localhost:3000/home");
		// If user is authenticated, continue.
	}
}
