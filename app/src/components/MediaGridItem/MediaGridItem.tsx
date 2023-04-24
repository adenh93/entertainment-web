import Image from 'next/image'
import { Media } from '@/graphql/codegen/graphql'
import { AspectRatio, Stack } from '@chakra-ui/react'
import MediaDetails from '@/components/MediaDetails'
import { extractSanityImage } from '@/lib/utils/sanity'

export interface MediaGridItemProps {
  media: Media
}

export default function MediaGridItem({ media }: MediaGridItemProps) {
  const image = extractSanityImage(media.posterImage)

  return (
    <Stack spacing={1}>
      <AspectRatio ratio={140 / 87}>
        <Image
          {...image}
          style={{
            borderRadius: '8px',
            objectFit: 'cover',
          }}
        />
      </AspectRatio>
      <MediaDetails media={media} size="sm" />
    </Stack>
  )
}
