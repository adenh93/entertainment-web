import { Box, Grid, Heading } from '@chakra-ui/react'
import { MediaListCurated } from '@/graphql/codegen/graphql'
import Carousel from '@/components/Carousel'
import MediaCarouselItem from '@/components/MediaCarouselItem'
import MediaGridItem from '@/components/MediaGridItem'

export interface SectionMediaListCuratedProps {
  section: MediaListCurated
}

export default function SectionMediaListCurated({
  section,
}: SectionMediaListCuratedProps) {
  const layout = section.settings?.layoutType as LayoutType

  if (!section.items) return <></>

  return (
    <Box mb={5.5} overflow="hidden">
      <Heading size="lg" mb={3}>
        {section.settings?.title}
      </Heading>
      {layout === 'carousel' ? (
        <Carousel>
          {section.items.map((media, key) => (
            <MediaCarouselItem media={media!} key={key} />
          ))}
        </Carousel>
      ) : (
        <Grid
          templateColumns="repeat(4, 1fr)"
          columnGap={5.5}
          rowGap={4}
          pr={5}
        >
          {section.items.map((media, key) => (
            <MediaGridItem media={media!} key={key} />
          ))}
        </Grid>
      )}
    </Box>
  )
}
