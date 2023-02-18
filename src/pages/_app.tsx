import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({
	defaultOptions: { queries: { suspense: true } },
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<React.StrictMode>
			<QueryClientProvider client={queryClient}>
				<React.Suspense fallback="Loading...">
					<Component {...pageProps} />
				</React.Suspense>
			</QueryClientProvider>
		</React.StrictMode>
	);
}
