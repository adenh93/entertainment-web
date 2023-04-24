import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import theme from '@/theme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <main>
          <Component {...pageProps} />
        </main>
      </Layout>
    </ChakraProvider>
  )
}
