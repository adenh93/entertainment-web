import { Box } from '@chakra-ui/react'
import { Media } from '@/graphql/codegen/graphql'
import MediaDetails from '@/components/MediaDetails'
import MediaImageWrapper from '@/components/MediaImageWrapper'
import MediaImage from '@/components/MediaImage'

export interface MediaCarouslItemProps {
  media: Media
}

export default function MediaCarouselItem({ media }: MediaCarouslItemProps) {
  return (
    <Box pos="relative">
      <MediaImageWrapper w="470px" h="230px">
        <MediaImage posterImage={media.posterImage} />
        <Box
          pos="absolute"
          bottom="0"
          p={3}
          bg="gradient"
          w="full"
          borderRadius="8px"
          pointerEvents="none"
        >
          <MediaDetails media={media} size="lg" />
        </Box>
      </MediaImageWrapper>
    </Box>
  )
}
