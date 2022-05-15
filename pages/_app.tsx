import type { AppProps } from 'next/app';
import { SWRConfig } from 'swr';
import { fetcher } from 'core/utils';
import ThemeProvider from 'components/Provider/ThemeProvider';
import Layout from 'components/Layout';
import { useDirectionSetter } from 'core/lib/hooks/use-directionSetter';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  useDirectionSetter();

  return (
    <ThemeProvider>
      <SWRConfig
        value={{
          fetcher,
          provider: () => new Map(),
          onError: (error, key) => {
            /**
             * Handle error globaly from SWR
             */
          },
        }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SWRConfig>
    </ThemeProvider>
  );
}

export default MyApp;
