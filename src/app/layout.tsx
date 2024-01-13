import Footer from "@/components/common/layout/Footer/index";
import Header from "@/components/common/layout/Header";
import Main from "@/components/common/layout/Main";
import DateLocalizationProvider from "@/providers/DateLocalizationProvider";
import ReactQueryClientProvider from "@/providers/ReactQueryClientProvider";
import RecoilProvider from "@/providers/RecoilProvider";
import StyleProviders from "@/providers/StyleProviders";
import StyledComponentsRegistry from "@/providers/StyledComponentsRegistry";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import "./reset.css";

export const metadata: Metadata = {
	title: "Your Planet",
	description: "Dream Your Planet",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html>
			<body className="overflow-x-hidden overflow-y-scroll">
				<div id="__next">
					<StyleProviders>
						<DateLocalizationProvider>
							<StyledComponentsRegistry>
								<ReactQueryClientProvider>
									<RecoilProvider>
										<Header />
										<Main>{children}</Main>
										<Footer />
									</RecoilProvider>
								</ReactQueryClientProvider>
							</StyledComponentsRegistry>
						</DateLocalizationProvider>
					</StyleProviders>
				</div>
			</body>
		</html>
	);
}
