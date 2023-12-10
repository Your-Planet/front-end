import "./globals.css";
import "./reset.css";
import type { Metadata } from "next";
import Header from "@/components/common/layout/Header";
import StyledComponentsRegistry from "@/providers/StyledComponentsRegistry";
import StyleProviders from "@/providers/StyleProviders";
import DateLocalizationProvider from "@/providers/DateLocalizationProvider";
import Footer from "@/components/common/layout/Footer/index";
import ReactQueryClientProvider from "@/providers/ReactQueryClientProvider";

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
								<ReactQueryClientProvider>
									<Header />
									<main className="pt-20 min-h-full">{children}</main>
									<Footer />
								</ReactQueryClientProvider>
							</StyledComponentsRegistry>
						</DateLocalizationProvider>
					</StyleProviders>
				</div>
			</body>
		</html>
	);
}
