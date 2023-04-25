import { ChangeEventHandler, useMemo, useState } from 'react'
import debounce from 'lodash.debounce'
import { useLazyQuery } from '@apollo/client'
import { Media } from '@/graphql/codegen/graphql'
import SEARCH_MEDIA from '@/graphql/queries/searchMedia'

export default function useMediaSearch() {
  const [getMedia] = useLazyQuery(SEARCH_MEDIA)
  const [search, setSearch] = useState<string>('')
  const [searchResults, setSearchResults] = useState<Media[]>([])

  const clearSearchResults = () => {
    setSearchResults([])
    setSearch('')
  }

  const handleSearch: ChangeEventHandler<HTMLInputElement> = async (e) => {
    const search = e.target.value.trim()
    if (!search) return clearSearchResults()

    const wildcardSearch = `*${search}*`

    const { data } = await getMedia({ variables: { search: wildcardSearch } })
    setSearchResults(data.allMedia)
    setSearch(search)
  }

  const onUpdateSearch = useMemo(() => debounce(handleSearch, 500), [])

  return { search, searchResults, onUpdateSearch }
}
