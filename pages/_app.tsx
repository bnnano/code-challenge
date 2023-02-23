import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { QueryClientProvider, QueryClient, Hydrate } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Inter } from '@next/font/google';
import { styled } from '@/stitches.config';

const inter = Inter({ subsets: ['latin'] });

const StyledMain = styled('main', {
    height: '100%',
});

export default function App({ Component, pageProps }: AppProps) {
    // Making sure QueryClient instance is created once per client
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <StyledMain className={inter.className}>
                    <Component {...pageProps} />
                    <ReactQueryDevtools />
                </StyledMain>
            </Hydrate>
        </QueryClientProvider>
    );
}
