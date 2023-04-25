import { Stack } from '@chakra-ui/react'
import { PageAll } from '@/graphql/codegen/graphql'
import getClient from '@/client'
import GET_PAGE_ALL_SETTINGS from '@/graphql/queries/getPageAllSettings'
import MediaPage from '@/components/MediaPage'
import SearchInput from '@/components/SearchInput'
import useMediaSearch from '@/hooks/useMediaSearch'
import SearchResults from '@/components/SearchResults'

export interface HomeProps {
  page: PageAll
}

export default function Home({ page }: HomeProps) {
  const { search, searchResults, onUpdateSearch } = useMediaSearch()

  return (
    <Stack spacing={2.5}>
      <SearchInput
        onChange={onUpdateSearch}
        placeholder="Search movies or TV series"
      />
      {search ? (
        <SearchResults search={search} searchResults={searchResults} />
      ) : (
        <MediaPage pageSettings={page.settings} />
      )}
    </Stack>
  )
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
