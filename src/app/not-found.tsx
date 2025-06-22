"use client";

import { HouseIcon, MagnifyingGlassIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function NotFound() {
	return (
		<div className="min-h-screen min-w-screen flex items-center justify-center bg-background p-4">
			<Card className="w-full max-w-md shadow-lg border-0">
				<CardHeader className="text-center">
					<div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
						<MagnifyingGlassIcon className="h-6 w-6 text-muted-foreground" />
					</div>
					<h2 className="text-2xl font-bold">Page Not Found</h2>
					<p className="text-sm text-muted-foreground">
						The page you&apos;re looking for doesn&apos;t exist or has been
						moved.
					</p>
				</CardHeader>
				<CardContent className="space-y-4">
					<div className="space-y-2">
						<Button asChild className="w-full" size="sm">
							<Link href="/">
								<HouseIcon className="mr-2 h-4 w-4" />
								Go to homepage
							</Link>
						</Button>

						<Button
							variant="outline"
							onClick={() => window.history.back()}
							className="w-full"
							size="sm"
						>
							Go back
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
