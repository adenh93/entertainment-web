import { Box, Stack } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import {
  BookmarkIcon,
  BrandIcon,
  FilmIcon,
  GridIcon,
  TVIcon,
} from '@/components/Icons'

interface NavItem {
  href: string
  icon: ReactElement
}

const navItems: NavItem[] = [
  { href: '/', icon: <GridIcon /> },
  { href: '/movies', icon: <FilmIcon /> },
  { href: '/tv-series', icon: <TVIcon /> },
  { href: '/bookmarks', icon: <BookmarkIcon /> },
]

export default function Navigation() {
  const router = useRouter()

  return (
    <Stack spacing={7} alignItems="center">
      <Link href="/">
        <BrandIcon color="brand" />
      </Link>
      <Stack spacing={5.5} alignItems="center">
        {navItems.map(({ href, icon }) => {
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
        })}
      </Stack>
    </Stack>
  )
}
