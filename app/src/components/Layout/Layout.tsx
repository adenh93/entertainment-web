import { HStack } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import Sidebar from '@/components/Sidebar'
import Navigation from '@/components/Navigation'
import Account from '@/components/Account'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <HStack spacing={5} p={5}>
      <Sidebar>
        <Navigation />
        <Account />
      </Sidebar>
      {children}
    </HStack>
  )
}
