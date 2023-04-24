import { Box, HStack } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import Sidebar from '@/components/Sidebar'
import Navigation from '@/components/Navigation'
import Account from '@/components/Account'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <HStack spacing={5} py={5} pl={5} alignItems="flex-start">
      <Sidebar>
        <Navigation />
        <Account />
      </Sidebar>
      <Box overflow="hidden">{children}</Box>
    </HStack>
  )
}
