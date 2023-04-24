import { extendTheme } from '@chakra-ui/react'
import colors from './colors'
import space from './spacing'
import fonts from './fonts'
import * as components from './components'

const theme = extendTheme({
  colors,
  space,
  fonts,
  components: {
    ...components,
  },
  styles: {
    global: () => ({
      body: {
        bg: 'background',
      },
    }),
  },
})

export default theme
