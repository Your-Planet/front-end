import Header from "@/components/Header";
import Providers from "@/public/Providers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Your Planet",
	description: "Dream Your Planet",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body>
				<div id="__next">
					<Providers>
						<Header />
						<main style={{ marginTop: "72px" }}>{children}</main>
					</Providers>
				</div>
			</body>
		</html>
	);
}
