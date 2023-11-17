import Header from "@/components/Header";
import StyleProviders from "@/public/StyleProviders";
import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";

export const metadata: Metadata = {
	title: "Your Planet",
	description: "Dream Your Planet",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body>
				<div id="__next">
					<StyleProviders>
						<Header />
						<main style={{ paddingTop: "72px", minHeight: "100%" }}>{children}</main>
					</StyleProviders>
				</div>
			</body>
		</html>
	);
}
