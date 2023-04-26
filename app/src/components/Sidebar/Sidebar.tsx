import { Box, Stack } from '@chakra-ui/react'
import { PropsWithChildren } from 'react'

export default function Sidebar({ children }: PropsWithChildren) {
  return (
    <Box w={{ sm: 'full', lg: 'unset' }} p={{ sm: 0, md: 4 }}>
      <Box
        bg="foreground"
        borderRadius={{ sm: 0, md: '20px' }}
        py={4}
        px={{ sm: 2, lg: 4 }}
        w={{ sm: 'full', lg: '96px' }}
        h={{ sm: '76px', lg: '960px' }}
      >
        <Stack
          direction={{ sm: 'row', lg: 'column' }}
          justifyContent="space-between"
          h="full"
          alignItems="center"
        >
          {children}
        </Stack>
      </Box>
    </Box>
  )
}
