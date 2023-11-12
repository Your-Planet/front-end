import type { AppProps } from "next/app";
import "./reset.css";

export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
