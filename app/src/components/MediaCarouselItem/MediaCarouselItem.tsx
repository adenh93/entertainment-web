import { Box } from '@chakra-ui/react'
import Image from 'next/image'
import { Media } from '@/graphql/codegen/graphql'
import { extractSanityImage } from '@/lib/utils/sanity'
import MediaDetails from '@/components/MediaDetails'

export interface MediaCarouslItemProps {
  media: Media
}

export default function MediaCarouselItem({ media }: MediaCarouslItemProps) {
  const image = extractSanityImage(media.posterImage)

  return (
    <Box pos="relative">
      <Image
        {...image}
        style={{
          width: '470px',
          height: '230px',
          borderRadius: '8px',
          objectFit: 'cover',
        }}
      />
      <Box
        pos="absolute"
        bottom="0"
        p={3}
        bg="gradient"
        w="470px"
        borderRadius="8px"
      >
        <MediaDetails media={media} size="lg" />
      </Box>
    </Box>
  )
}
