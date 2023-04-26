import { Grid } from '@chakra-ui/react'
import { Media } from '@/graphql/codegen/graphql'
import MediaGridItem from '@/components/MediaGridItem'

export interface MediaGridProps {
  items: Media[]
}

const templateColumns = {
  sm: 'repeat(2, 1fr)',
  md: 'repeat(3, 1fr)',
  lg: 'repeat(4, 1fr)',
}

export default function MediaGrid({ items }: MediaGridProps) {
  return (
    <Grid
      templateColumns={templateColumns}
      columnGap={{ sm: 2, md: 4, lg: 5.5 }}
      rowGap={{ sm: 2, md: 3, lg: 4 }}
      pr={4}
      maxW={{ sm: 'unset', lg: '1240px' }}
    >
      {items.map((media, key) => (
        <MediaGridItem media={media} key={key} />
      ))}
    </Grid>
  )
}
