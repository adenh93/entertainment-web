import { extendTheme } from '@chakra-ui/react'
import colors from './colors'
import spacing from './spacing'
import fonts from './fonts'
import * as components from './components'

const theme = extendTheme({
  colors,
  spacing,
  fonts,
  components: {
    ...components,
  },
})

export default theme
