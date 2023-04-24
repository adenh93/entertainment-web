import { Box, BoxProps } from '@chakra-ui/react'
import PlayButton from '@/components/PlayButton'

export default function MediaImageWrapper({ children, ...props }: BoxProps) {
  return (
    <Box {...props} cursor="pointer" pos="relative">
      <Box
        opacity={0}
        _hover={{ opacity: 1 }}
        w="full"
        h="full"
        bg="gradient"
        transition="opacity 0.2s ease"
        pos="absolute"
      >
        <Box
          as="span"
          pos="absolute"
          left="50%"
          top="50%"
          transform="translate(-50%, -50%)"
        >
          <PlayButton />
        </Box>
      </Box>
      {children}
    </Box>
  )
}
