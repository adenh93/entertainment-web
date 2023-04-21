// Documents
import media from './documents/media'
import mediaGenre from './documents/mediaGenre'
import mediaRating from './documents/mediaRating'

// Objects
import blockContent from './objects/blockContent'
import mediaListSettings from './objects/mediaListSettings'
import mediaSections from './objects/mediaSections'
import mediaPageSettings from './objects/mediaPageSettings'

// Sections
import mediaListCurated from './sections/mediaListCurated'
import mediaListFiltered from './sections/mediaListFiltered'
import mediaListTrending from './sections/mediaListTrending'

// Pages
import pageMovies from './pages/pageMovies'
import pageTVSeries from './pages/pageTVSeries'
import pageWishlist from './pages/pageBookmarks'

export const schemaTypes = [
  // Documents
  media,
  mediaRating,
  mediaGenre,

  // Objects
  blockContent,
  mediaListSettings,
  mediaSections,
  mediaPageSettings,

  // Sections
  mediaListCurated,
  mediaListFiltered,
  mediaListTrending,

  // Pages
  pageMovies,
  pageTVSeries,
  pageWishlist,
]
