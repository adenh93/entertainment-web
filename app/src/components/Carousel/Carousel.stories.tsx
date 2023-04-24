import type { Meta, StoryObj } from '@storybook/react'
import { Media } from '@/graphql/codegen/graphql'
import Carousel from './Carousel'
import MediaCarouselItem from '@/components/MediaCarouselItem'
import firstImage from '@/storybook/__fixtures__/images/beyond-earth.jpg'
import secondImage from '@/storybook/__fixtures__/images/bottom-gear.jpg'
import thirdImage from '@/storybook/__fixtures__/images/undiscovered-cities.jpg'

const meta: Meta<typeof Carousel> = {
  title: 'Carousel',
  component: Carousel,
}

export default meta

type Story = StoryObj<typeof Carousel>

const mediaList: Media[] = [
  {
    title: 'Beyond Earth',
    posterImage: {
      asset: {
        source: { url: firstImage.src },
        altText: 'Beyond Earth poster image',
        metadata: {
          dimensions: {
            width: firstImage.width,
            height: firstImage.height,
          },
        },
      },
    },
    mediaType: 'movie',
    releaseDate: '2019-01-01',
    rating: { code: 'PG' },
  },
  {
    title: 'Bottom Gear',
    posterImage: {
      asset: {
        source: { url: secondImage.src },
        altText: 'Bottom Gear poster image',
        metadata: {
          dimensions: {
            width: secondImage.width,
            height: secondImage.height,
          },
        },
      },
    },
    mediaType: 'movie',
    releaseDate: '2021-01-01',
    rating: { code: 'PG' },
  },
  {
    title: 'Undiscovered Cities',
    posterImage: {
      asset: {
        source: { url: thirdImage.src },
        altText: 'Undiscovered Cities poster image',
        metadata: {
          dimensions: {
            width: thirdImage.width,
            height: thirdImage.height,
          },
        },
      },
    },
    mediaType: 'tvSeries',
    releaseDate: '2019-01-01',
    rating: { code: 'G' },
  },
]

const children = mediaList.map((media) => <MediaCarouselItem media={media} />)

export const Primary: Story = {
  args: { children },
}
