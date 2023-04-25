import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

let client: ApolloClient<any> | null = null

export default function getClient() {
  if (!client || typeof window === 'undefined') {
    client = new ApolloClient({
      link: new HttpLink({
        uri: process.env.NEXT_PUBLIC_SANITY_API_URL,
      }),
      cache: new InMemoryCache(),
    })
  }

  return client
}
