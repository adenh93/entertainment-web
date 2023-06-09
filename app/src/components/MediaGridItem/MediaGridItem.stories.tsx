import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '@chakra-ui/react'
import { Media } from '@/graphql/codegen/graphql'
import MediaGridItem from './MediaGridItem'
import posterImage from '@/storybook/__fixtures__/images/top-gear.jpg'

const meta: Meta<typeof MediaGridItem> = {
  title: 'MediaGridItem',
  component: MediaGridItem,
}

export default meta

type Story = StoryObj<typeof MediaGridItem>

const media: Media = {
  title: 'Top Gear',
  posterImage: {
    asset: {
      url: posterImage.src,
      altText: 'Top Gear poster image',
      metadata: {
        dimensions: {
          width: posterImage.width,
          height: posterImage.height,
        },
      },
    },
  },
  mediaType: 'tvShow',
  releaseDate: '2008-01-01',
  rating: { code: 'PG' },
}

const Template = (args: any) => (
  <Box w={280}>
    <MediaGridItem {...args} />
  </Box>
)

export const Primary: Story = {
  args: {
    media,
  },
  render: Template,
}
