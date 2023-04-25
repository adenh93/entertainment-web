import { ChakraProvider } from '@chakra-ui/react'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import theme from '@/theme'
import getClient from '@/client'

const client = getClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Layout>
          <main>
            <Component {...pageProps} />
          </main>
        </Layout>
      </ChakraProvider>
    </ApolloProvider>
  )
}
