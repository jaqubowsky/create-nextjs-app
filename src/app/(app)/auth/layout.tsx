import type { Metadata } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";

export const metadata: Metadata = {
	title: "Authentication",
	description: "Sign in to your account",
};

export default async function AuthLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth.api.getSession({
		headers: await headers(),
	});

	if (session) return redirect("/account");

	return (
		<div className="flex-1 flex items-center justify-center">{children}</div>
	);
}
