import { Global, css } from '@emotion/react';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../client/graphql/client';

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Global
        styles={css`
          html,
          body,
          #__next {
            padding: 0;
            margin: 0;
            height: 100%;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
        `}
      />
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
