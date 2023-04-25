import Link from 'next/link'
import { BrandIcon } from '@/components/Icons'
import { Box, BoxProps } from '@chakra-ui/react'

export default function Brand(props: BoxProps) {
  return (
    <Box as="span" {...props}>
      <Link href="/">
        <BrandIcon color="brand" />
      </Link>
    </Box>
  )
}
