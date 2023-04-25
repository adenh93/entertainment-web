import { Box, Stack } from '@chakra-ui/react'
import { BookmarkIcon, FilmIcon, GridIcon, TVIcon } from '@/components/Icons'
import NavItem from '@/components/NavItem'
import Brand from '@/components/Brand'

const navItems: NavItemType[] = [
  { href: '/', icon: <GridIcon /> },
  { href: '/movies', icon: <FilmIcon /> },
  { href: '/tv-series', icon: <TVIcon /> },
  { href: '/bookmarks', icon: <BookmarkIcon /> },
]

export default function Navigation() {
  const content = (
    <Stack
      spacing={5.5}
      alignItems="center"
      direction={{ sm: 'row', lg: 'column' }}
    >
      {navItems.map((item, key) => (
        <NavItem item={item} key={key} />
      ))}
    </Stack>
  )

  return (
    <>
      <Stack
        spacing={7}
        alignItems="center"
        direction={{ sm: 'row', lg: 'column' }}
        display={{ sm: 'none', lg: 'block' }}
      >
        <Brand />
        {content}
      </Stack>
      <Brand display={{ sm: 'block', lg: 'none' }} />
      <Box as="span" display={{ sm: 'block', lg: 'none' }}>
        {content}
      </Box>
    </>
  )
}
