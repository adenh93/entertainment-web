import Head from 'next/head'
import { Box, Stack } from '@chakra-ui/react'
import { MediaPageSettings } from '@/graphql/codegen/graphql'
import useMediaSearch from '@/hooks/useMediaSearch'
import SearchInput from '@/components/SearchInput'
import SearchResults from '@/components/SearchResults'
import Sections from '@/components/Sections'

export interface MediaPageProps {
  pageSettings?: MediaPageSettings | null
}

export default function MediaPage({ pageSettings }: MediaPageProps) {
  const { search, searchResults, onUpdateSearch } = useMediaSearch()

  return (
    <>
      <Head>
        <title>{pageSettings?.title}</title>
      </Head>
      <Stack
        spacing={2.5}
        pt={{ sm: 3, md: 0, lg: 4 }}
        pl={{ sm: 4, lg: 0 }}
        pb={4}
      >
        <Box pr={4}>
          <SearchInput
            onChange={onUpdateSearch}
            placeholder="Search movies or TV series"
          />
        </Box>
        {search ? (
          <SearchResults search={search} searchResults={searchResults} />
        ) : (
          <Sections sections={pageSettings?.mediaSections} />
        )}
      </Stack>
    </>
  )
}
