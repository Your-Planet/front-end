import "./globals.css";
import "./reset.css";
import type { Metadata } from "next";
import Header from "@/components/common/layout/Header";
import StyledComponentsRegistry from "@/providers/StyledComponentsRegistry";
import StyleProviders from "@/providers/StyleProviders";
import DateLocalizationProvider from "@/providers/DateLocalizationProvider";
import Footer from "@/components/common/layout/Footer/index";
import ReactQueryClientProvider from "@/providers/ReactQueryClientProvider";
import RecoilProvider from "@/providers/RecoilProvider";
import { ReactNode } from "react";
import Main from "@/components/common/layout/Main";

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
