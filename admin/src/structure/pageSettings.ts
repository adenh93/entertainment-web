import {ListItemBuilder, StructureBuilder} from 'sanity/desk'
import {CogIcon, DocumentIcon} from '@sanity/icons'

export const pageSettingsListItem = (S: StructureBuilder): ListItemBuilder =>
  S.listItem()
    .title('Page Settings')
    .icon(CogIcon)
    .child(
      S.list()
        .title('Settings')
        .items([
          S.listItem()
            .title('All Media Page')
            .child(S.document().schemaType('pageAll').id('pageAll'))
            .icon(DocumentIcon),
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
    )
