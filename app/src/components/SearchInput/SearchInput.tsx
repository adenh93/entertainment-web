import { HStack, Input, InputProps } from '@chakra-ui/react'
import { SearchIcon } from '@/components/Icons'

export default function SearchInput(props: InputProps) {
  return (
    <HStack spacing={3.5}>
      <SearchIcon color="white" mb={0.5} />
      <Input {...props} size="lg" />
    </HStack>
  )
}
