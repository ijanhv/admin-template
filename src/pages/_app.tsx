import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";
import React from "react";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Layout from "@/layout/Layout";
import Head from "next/head";
import { ThemeProvider } from "@/components/theme-provider";
import { montserrat, openSans, poppins, quickSand } from "@/utils/font";
export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="Home" content="Home" />
        <link rel="icon" type="text/html" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <ThemeProvider attribute="class" defaultTheme="light">
            <div
              className={`${quickSand.variable} ${openSans.variable} ${montserrat.variable} ${poppins.variable} font-poppins h-full`}
            >
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </div>
          </ThemeProvider>

          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </HydrationBoundary>
      </QueryClientProvider>
    </>
  );
}
