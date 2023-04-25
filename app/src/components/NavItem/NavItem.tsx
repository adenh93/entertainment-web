import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export interface NavItemProps {
  item: NavItemType
}

export default function NavItem({ item }: NavItemProps) {
  const router = useRouter()

  const { href, icon } = item
  const isActive = router.pathname === href

  return (
    <Link href={href}>
      <Box
        as="span"
        color={isActive ? 'white' : 'icon'}
        _hover={{ color: isActive ? 'white' : 'brand' }}
      >
        {icon}
      </Box>
    </Link>
  )
}
