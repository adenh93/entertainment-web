import {ListItemBuilder, StructureBuilder} from 'sanity/desk'
import {PlayIcon} from '@sanity/icons'

export const mediaListItem = (S: StructureBuilder): ListItemBuilder =>
  S.listItem()
    .title('Media')
    .icon(PlayIcon)
    .child(
      S.list()
        .title('Media Documents')
        .items([
          S.listItem()
            .title('Movies')
            .child(
              S.documentList().filter(`_type == "media" && mediaType == "movie"`).id('movies')
            ),
          S.listItem()
            .title('TV Series')
            .child(
              S.documentList().filter(`_type == "media" && mediaType == "tvShow"`).id('tvSeries')
            ),
          S.listItem()
            .title('Genres')
            .child(S.documentList().filter('_type == "mediaGenre"').id('genres')),
          S.listItem()
            .title('Ratings')
            .child(S.documentList().filter('_type == "mediaRating"').id('ratings')),
        ])
    )
