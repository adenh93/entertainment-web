import { Divider, HStack } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

export default function MediaMetafields({ children }: PropsWithChildren) {
  return (
    <HStack
      divider={
        <Divider
          orientation="vertical"
          borderWidth="1.5px !important"
          borderColor="white"
          borderRadius="full"
        />
      }
    >
      {children}
    </HStack>
  )
}
