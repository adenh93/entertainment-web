import { Theme } from '@chakra-ui/react'
import { Outfit } from 'next/font/google'

const outfit = Outfit({
  weight: ['300', '500'],
  style: ['normal'],
  subsets: ['latin'],
})

const fontFamily = outfit.style.fontFamily

const fonts: Theme['fonts'] = {
  body: fontFamily,
  heading: fontFamily,
  mono: fontFamily,
}

export default fonts
