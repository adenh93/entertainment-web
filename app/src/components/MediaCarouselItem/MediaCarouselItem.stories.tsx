import type { Meta, StoryObj } from '@storybook/react'
import { Media } from '@/graphql/codegen/graphql'
import MediaCarouselItem from './MediaCarouselItem'
import posterImage from './__fixtures__/beyond-earth.jpg'

const meta: Meta<typeof MediaCarouselItem> = {
  title: 'MediaCarouselItem',
  component: MediaCarouselItem,
}

export default meta

type Story = StoryObj<typeof MediaCarouselItem>

const media: Media = {
  title: 'Beyond Earth',
  posterImage: {
    asset: {
      source: { url: posterImage.src },
      altText: 'Beyond Earth poster image',
      metadata: {
        dimensions: {
          width: posterImage.width,
          height: posterImage.height,
        },
      },
    },
  },
  mediaType: 'movie',
  releaseDate: '2019-01-01',
  rating: { code: 'PG' },
}

export const Primary: Story = {
  args: {
    media,
  },
}
