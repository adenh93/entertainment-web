import { gql } from '@apollo/client'

const GET_PAGE_ALL_SETTINGS = gql`
  query GetPageAllSettings {
    PageAll(id: "pageAll") {
      settings {
        title
        mediaSections {
          ... on MediaListCurated {
            items {
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
            settings {
              layoutType
              title
            }
          }
        }
      }
    }
  }
`

export default GET_PAGE_ALL_SETTINGS
