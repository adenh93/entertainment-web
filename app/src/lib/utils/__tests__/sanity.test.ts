import { Image } from '@/graphql/codegen/graphql'
import { ImageProps } from 'next/image'
import { faker } from '@faker-js/faker'
import { extractSanityImage } from '../sanity'

describe('extractSanityImage', () => {
  test('extracts NextJS compatible image from Sanity image source', () => {
    const url = faker.internet.url()
    const altText = faker.lorem.sentence()
    const width = +faker.random.numeric(3)
    const height = +faker.random.numeric(3)

    const sanityImage: Image = {
      asset: {
        source: { url },
        altText,
        metadata: {
          dimensions: {
            width,
            height,
          },
        },
      },
    }

    const expected: ImageProps = {
      src: url,
      alt: altText,
      width,
      height,
    }

    const result = extractSanityImage(sanityImage)

    expect(result).toEqual(expected)
  })

  test('returns default values if image is null or undefined', () => {
    const sanityImages = [null, undefined]
    const expected: ImageProps = { src: '', alt: '', width: 0, height: 0 }

    sanityImages.forEach((image) => {
      const result = extractSanityImage(image)
      expect(result).toEqual(expected)
    })
  })
})
