import { Grid } from '@chakra-ui/react'
import { Media } from '@/graphql/codegen/graphql'
import MediaGridItem from '@/components/MediaGridItem'

export interface MediaGridProps {
  items: Media[]
}

export default function MediaGrid({ items }: MediaGridProps) {
  return (
    <Grid templateColumns="repeat(4, 1fr)" columnGap={5.5} rowGap={4}>
      {items.map((media, key) => (
        <MediaGridItem media={media} key={key} />
      ))}
    </Grid>
  )
}
