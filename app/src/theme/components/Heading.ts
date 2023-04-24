import { ComponentStyleConfig } from '@chakra-ui/react'

const Heading: ComponentStyleConfig = {
  baseStyle: {
    color: 'white',
  },
  sizes: {
    xs: { fontSize: '18px', fontWeight: 500 },
    sm: { fontSize: '24px', fontWeight: 500 },
    md: { fontSize: '24px', fontWeight: 300 },
    lg: { fontSize: '32px', fontWeight: 300, letterSpacing: '-0.05rem' },
  },
}

export default Heading
