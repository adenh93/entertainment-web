import {StructureBuilder} from 'sanity/desk'
import {CogIcon, DocumentIcon, PlayIcon} from '@sanity/icons'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
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
                  S.documentList()
                    .filter(`_type == "media" && mediaType == "tvShow"`)
                    .id('tvSeries')
                ),
              S.listItem()
                .title('Genres')
                .child(S.documentList().filter('_type == "mediaGenre"').id('genres')),
              S.listItem()
                .title('Ratings')
                .child(S.documentList().filter('_type == "mediaRating"').id('ratings')),
            ])
        ),
      S.listItem()
        .title('Page Settings')
        .icon(CogIcon)
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Movie Page')
                .child(S.document().schemaType('pageMovies').id('pageMovies'))
                .icon(DocumentIcon),
              S.listItem()
                .title('TV Series Page')
                .child(S.document().schemaType('pageTVSeries').id('pageTVSeries'))
                .icon(DocumentIcon),
              S.listItem()
                .title('Bookmarks Page')
                .child(S.document().schemaType('pageBookmarks').id('pageBookmarks'))
                .icon(DocumentIcon),
            ])
        ),
    ])
