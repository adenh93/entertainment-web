import { PageAll } from '@/graphql/codegen/graphql'
import getClient from '@/client'
import GET_PAGE_ALL_SETTINGS from '@/graphql/queries/getPageAllSettings'
import MediaPage from '@/components/MediaPage'

export interface HomeProps {
  page: PageAll
}

export default function Home({ page }: HomeProps) {
  return <MediaPage pageSettings={page.settings} />
}

export async function getStaticProps() {
  const client = getClient()

  const { data } = await client.query({
    query: GET_PAGE_ALL_SETTINGS,
  })

  const page = data.PageAll

  return {
    props: {
      page: page,
    },
  }
}
