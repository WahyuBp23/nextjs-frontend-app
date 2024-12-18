import "@/styles/globals.css";
import "@/styles/bootstrap-533-dist/css/bootstrap.min.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
