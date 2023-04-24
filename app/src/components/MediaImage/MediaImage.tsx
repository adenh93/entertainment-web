import NextImage from 'next/image'
import { Image } from '@/graphql/codegen/graphql'
import { extractSanityImage } from '@/lib/utils/sanity'

export interface MediaImageProps {
  posterImage?: Image | null
}

export default function MediaImage({ posterImage }: MediaImageProps) {
  const image = extractSanityImage(posterImage)

  return (
    <NextImage
      {...image}
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '8px',
        objectFit: 'cover',
      }}
    />
  )
}
