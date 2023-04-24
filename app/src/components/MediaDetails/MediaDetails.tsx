import { Media } from '@/graphql/codegen/graphql'
import { HStack, Heading, IconProps, Stack, Text } from '@chakra-ui/react'
import { TVIcon, FilmIcon } from '@/components/Icons'
import { formatMediaReleaseYear } from '@/lib/utils/media'
import MediaMetafields from '@/components/MediaMetafields'

export interface MediaDetailsProps {
  media: Media
  size: 'sm' | 'lg'
}

const MediaTypeDisplay: Record<MediaType, string> = {
  tvShow: 'TV Series',
  movie: 'Movie',
}

function getMediaIcon(mediaType: MediaType) {
  const props: IconProps = { width: '12px', height: '12px', color: 'white' }

  switch (mediaType) {
    case 'tvShow':
      return <TVIcon {...props} />
    case 'movie':
      return <FilmIcon {...props} />
    default:
      return <></>
  }
}

export default function MediaDetails({ media, size }: MediaDetailsProps) {
  const mediaType = media?.mediaType as MediaType
  const releaseYear = formatMediaReleaseYear(media?.releaseDate)
  const icon = getMediaIcon(mediaType)
  const mediaTypeDisplay = MediaTypeDisplay[mediaType] || ''

  const textSize = size === 'lg' ? 'md' : 'sm'
  const headingSize = size === 'lg' ? 'sm' : 'xs'

  return (
    <Stack spacing={0.5}>
      <MediaMetafields>
        <Text size={textSize}>{releaseYear}</Text>
        <HStack alignItems="center" spacing={1.5}>
          {icon}
          <Text size={textSize}>{mediaTypeDisplay}</Text>
        </HStack>
        <Text size={textSize}>{media?.rating?.code}</Text>
      </MediaMetafields>
      <Heading size={headingSize}>{media?.title}</Heading>
    </Stack>
  )
}
