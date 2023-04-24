import { Media } from '@/graphql/codegen/graphql'
import { AspectRatio, Stack } from '@chakra-ui/react'
import MediaDetails from '@/components/MediaDetails'
import MediaImageWrapper from '@/components/MediaImageWrapper'
import MediaImage from '@/components/MediaImage'

export interface MediaGridItemProps {
  media: Media
}

export default function MediaGridItem({ media }: MediaGridItemProps) {
  return (
    <Stack spacing={1}>
      <AspectRatio ratio={140 / 87}>
        <MediaImageWrapper>
          <MediaImage posterImage={media.posterImage} />
        </MediaImageWrapper>
      </AspectRatio>
      <MediaDetails media={media} size="sm" />
    </Stack>
  )
}
