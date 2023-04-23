import { Media } from '@/graphql/codegen/graphql'
import Image from 'next/image'
import {
  AspectRatio,
  Divider,
  HStack,
  Heading,
  IconProps,
  Stack,
  Text,
} from '@chakra-ui/react'
import { extractSanityImage } from '@/lib/utils/sanity'
import { TVIcon, FilmIcon } from '@/components/Icons'
import { formatMediaReleaseYear } from '@/lib/utils/media'

export interface MediaTileProps {
  media?: Media
  size: 'sm' | 'md'
}

const MediaTypeDisplay: Record<MediaType, string> = {
  tvSeries: 'TV Series',
  movie: 'Movie',
}

function getMediaIcon(mediaType: MediaType) {
  const props: IconProps = { width: '12px', height: '12px' }

  switch (mediaType) {
    case 'tvSeries':
      return <TVIcon {...props} />
    case 'movie':
      return <FilmIcon {...props} />
    default:
      return <></>
  }
}

export default function MediaTile({ media }: MediaTileProps) {
  const image = extractSanityImage(media?.posterImage)

  const mediaType = media?.mediaType as MediaType
  const releaseYear = formatMediaReleaseYear(media?.releaseDate)
  const icon = getMediaIcon(mediaType)
  const mediaTypeDisplay = MediaTypeDisplay[mediaType] || ''

  return (
    <Stack spacing={1}>
      <AspectRatio ratio={140 / 87}>
        <Image {...image} style={{ borderRadius: '8px' }} />
      </AspectRatio>
      <Stack spacing={0.5}>
        <HStack
          divider={
            <Divider
              orientation="vertical"
              borderWidth="1.5px !important"
              borderColor="white"
              borderRadius="full"
            />
          }
        >
          <Text size="sm">{releaseYear}</Text>
          <HStack alignItems="center" spacing={1.5}>
            {icon}
            <Text size="sm">{mediaTypeDisplay}</Text>
          </HStack>
          <Text size="sm">{media?.rating?.code}</Text>
        </HStack>
        <Heading size="xs">{media?.title}</Heading>
      </Stack>
    </Stack>
  )
}
