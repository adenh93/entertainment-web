import type { Meta, StoryObj } from '@storybook/react'
import MediaTile from './MediaTile'
import posterImage from './__fixtures__/top-gear.jpg'
import { Media } from '@/graphql/codegen/graphql'
import { Box } from '@chakra-ui/react'

const meta: Meta<typeof MediaTile> = {
  title: 'MediaTile',
  component: MediaTile,
}

export default meta

type Story = StoryObj<typeof MediaTile>

const media: Media = {
  title: 'Top Gear',
  posterImage: {
    asset: {
      source: { url: posterImage.src },
      altText: 'Top Gear poster image',
      metadata: {
        dimensions: {
          width: posterImage.width,
          height: posterImage.height,
        },
      },
    },
  },
  mediaType: 'tvSeries',
  releaseDate: '2008-01-01',
  rating: { code: 'PG' },
}

const Template = (args: any) => (
  <Box maxW={280}>
    <MediaTile {...args} />
  </Box>
)

export const Small: Story = {
  args: {
    media,
    size: 'sm',
  },
  render: Template,
}
