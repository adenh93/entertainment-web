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
})

export default theme
