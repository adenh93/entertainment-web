import { Box, Stack } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

export default function Sidebar({ children }: PropsWithChildren) {
  return (
    <Box bg="foreground" borderRadius="20px" p={4} w="96px" h="960px">
      <Stack justifyContent="space-between" h="full" alignItems="center">
        {children}
      </Stack>
    </Box>
  )
}
