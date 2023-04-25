import { gql } from '@apollo/client'

const SEARCH_MEDIA = gql`
  query SearchMedia($search: String!) {
    allMedia(where: { title: { matches: $search } }) {
      _key
      mediaType
      posterImage {
        asset {
          altText
          url
          metadata {
            dimensions {
              width
              height
            }
          }
        }
      }
      rating {
        code
      }
      releaseDate
      title
    }
  }
`

export default SEARCH_MEDIA
