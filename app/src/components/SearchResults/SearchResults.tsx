import { Media } from '@/graphql/codegen/graphql'
import { Heading, Stack } from '@chakra-ui/react'
import MediaGrid from '@/components/MediaGrid'
import { pluralize } from '@/lib/utils/format'

export interface SearchResultsProps {
  search: string
  searchResults: Media[]
}

export default function SearchResults({
  search,
  searchResults,
}: SearchResultsProps) {
  const count = searchResults.length

  return (
    <Stack spacing={4}>
      <Heading size="lg" as="h3">
        Found {count} {pluralize(count, 'result')} for '{search}'
      </Heading>
      <MediaGrid items={searchResults} />
    </Stack>
  )
}
