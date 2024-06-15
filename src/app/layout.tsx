import Footer from "@/components/common/layout/Footer/index";
import Header from "@/components/common/layout/Header";
import Main from "@/components/common/layout/Main";
import AuthProvider from "@/providers/AuthProvider";
import AxiosConfigRegistry from "@/providers/AxiosConfigRegistry";
import DateLocalizationProvider from "@/providers/DateLocalizationProvider";
import ReactQueryClientProvider from "@/providers/ReactQueryClientProvider";
import RecoilProvider from "@/providers/RecoilProvider";
import SnackbarProvider from "@/providers/SnackbarProvider";
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
			<body>
				<div id="__next">
					<StyleProviders>
						<DateLocalizationProvider>
							<StyledComponentsRegistry>
								<AxiosConfigRegistry>
									<AuthProvider>
										<ReactQueryClientProvider>
											<RecoilProvider>
												<SnackbarProvider>
													<Header />
													<Main>{children}</Main>
													<Footer />
												</SnackbarProvider>
											</RecoilProvider>
										</ReactQueryClientProvider>
									</AuthProvider>
								</AxiosConfigRegistry>
							</StyledComponentsRegistry>
						</DateLocalizationProvider>
					</StyleProviders>
				</div>
			</body>
		</html>
	);
}
