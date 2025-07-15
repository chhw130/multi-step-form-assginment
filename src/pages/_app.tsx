import '@/styles/globals.css';
import { CacheProvider } from '@emotion/react';
import type { AppProps } from 'next/app';
import createCache from '@emotion/cache';
import Layout from '@/components/Layout';

const cache = createCache({
  key: 'css',
  prepend: true,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CacheProvider>
  );
}
