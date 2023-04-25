import { Box, Heading } from '@chakra-ui/react'
import { Media, MediaListCurated } from '@/graphql/codegen/graphql'
import Carousel from '@/components/Carousel'
import MediaCarouselItem from '@/components/MediaCarouselItem'
import MediaGrid from '@/components/MediaGrid'

export interface SectionMediaListCuratedProps {
  section: MediaListCurated
}

export default function SectionMediaListCurated({
  section,
}: SectionMediaListCuratedProps) {
  const layout = section.settings?.layoutType as LayoutType
  const items = section.items as Media[]

  if (!section.items) return <></>

  return (
    <Box mb={5.5}>
      <Heading size="lg" mb={3}>
        {section.settings?.title}
      </Heading>
      {layout === 'carousel' ? (
        <Box>
          <Carousel>
            {section.items.map((media, key) => (
              <MediaCarouselItem media={media!} key={key} />
            ))}
          </Carousel>
        </Box>
      ) : (
        <MediaGrid items={items} />
      )}
    </Box>
  )
}
