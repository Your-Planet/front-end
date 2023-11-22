import Header from "@/components/common/layout/Header";
import StyledComponentsRegistry from "@/public/StyledComponentsRegistry";
import StyleProviders from "@/public/StyleProviders";
import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";
import DateLocalizationProvider from "@/providers/DateLocalizationProvider";

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
								<Header />
								<main className="pt-20 min-h-full">{children}</main>
							</StyledComponentsRegistry>
						</DateLocalizationProvider>
					</StyleProviders>
				</div>
			</body>
		</html>
	);
}
