import {StructureBuilder} from 'sanity/desk'
import {mediaListItem} from './media'
import {pageSettingsListItem} from './pageSettings'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([mediaListItem(S), pageSettingsListItem(S)])
