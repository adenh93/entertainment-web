import { Box, Stack } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'
import Sidebar from '@/components/Sidebar'
import Navigation from '@/components/Navigation'
import Account from '@/components/Account'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Stack
      direction={{ sm: 'column', lg: 'row' }}
      spacing={0}
      alignItems="flex-start"
    >
      <Sidebar>
        <Navigation />
        <Account />
      </Sidebar>
      <Box overflow="hidden" w="full">
        {children}
      </Box>
    </Stack>
  )
}
