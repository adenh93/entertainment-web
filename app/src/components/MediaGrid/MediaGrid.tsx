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
    <Grid templateColumns={templateColumns} columnGap={5.5} rowGap={4}>
      {items.map((media, key) => (
        <MediaGridItem media={media} key={key} />
      ))}
    </Grid>
  )
}
