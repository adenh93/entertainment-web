import { Image } from '@/graphql/codegen/graphql'
import { ImageProps } from 'next/image'

export function extractSanityImage(image?: Image | null): ImageProps {
  const src = image?.asset?.url || ''
  const alt = image?.asset?.altText || ''

  const width = image?.asset?.metadata?.dimensions?.width || 0
  const height = image?.asset?.metadata?.dimensions?.height || 0

  return { src, alt, width, height }
}
