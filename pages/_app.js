import Layout from '@/components/Layout'
import '@/styles/globals.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";
const client = new ApolloClient({
  uri: 'https://swift-sprint.testingnow.me/graphql',
  cache: new InMemoryCache()
});

function MyApp({ Component, pageProps, ...appProps }) {
  const usingLayout = ['/404'].includes(appProps.router.pathname);
  return (
    <ApolloProvider client={client}>

      {
        usingLayout ?
            <Component {...pageProps} /> :
            <Layout>
              <Component {...pageProps} />
            </Layout>
      }

    </ApolloProvider>
  )
}

export default MyApp
