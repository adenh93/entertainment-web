import { Box, HStack, Heading } from '@chakra-ui/react'
import { PlayIcon } from '@/components/Icons'

export default function PlayButton() {
  return (
    <Box
      bg="rgba(255, 255, 255, 0.25)"
      w="117px"
      h="48px"
      pos="relative"
      borderRadius="28.5px"
      cursor="pointer"
    >
      <HStack
        spacing={2.5}
        pos="absolute"
        top="50%"
        left="25%"
        transform="translate(-25%, -50%)"
      >
        <PlayIcon />
        <Heading as="span" size="xs">
          Play
        </Heading>
      </HStack>
    </Box>
  )
}
