import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';


export default function App({ Component, pageProps }: AppProps) {

  // Making sure QueryClient instance is created once per client
  const [queryClient] = useState(() => new QueryClient());

  return <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
    <ReactQueryDevtools />
  </QueryClientProvider>
}
