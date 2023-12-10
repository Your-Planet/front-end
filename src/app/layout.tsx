import Header from "@/components/common/layout/Header";
import StyledComponentsRegistry from "@/providers/StyledComponentsRegistry";
import StyleProviders from "@/providers/StyleProviders";
import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";
import DateLocalizationProvider from "@/providers/DateLocalizationProvider";
import { Suspense } from "react";
import Footer from "@/components/common/layout/Footer/index";

export const metadata: Metadata = {
	title: "Your Planet",
	description: "Dream Your Planet",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body className="overflow-x-hidden overflow-y-scroll">
				<div id="__next">
					<StyleProviders>
						<DateLocalizationProvider>
							<StyledComponentsRegistry>
								<Suspense fallback="Loading...">
									<Header />
									<main className="pt-20 min-h-full">{children}</main>
									<Footer />
								</Suspense>
							</StyledComponentsRegistry>
						</DateLocalizationProvider>
					</StyleProviders>
				</div>
			</body>
		</html>
	);
}
