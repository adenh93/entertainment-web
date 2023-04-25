import { ComponentStyleConfig } from '@chakra-ui/react'

const Input: ComponentStyleConfig = {
  defaultProps: {
    variant: 'flushed',
  },
  variants: {
    flushed: {
      field: {
        color: 'white',
        pb: 1,
        fontSize: '24px',
        fontWeight: 300,
        borderColor: 'transparent',
        _placeholder: {
          color: 'white',
          opacity: 0.5,
        },
        _focus: {
          boxShadow: 'none',
          borderBottom: '1px solid',
          borderColor: 'icon',
        },
      },
    },
  },
}

export default Input
