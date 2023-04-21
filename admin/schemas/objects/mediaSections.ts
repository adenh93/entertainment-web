import {defineArrayMember, defineType} from 'sanity'

export default defineType({
  title: 'Sections',
  name: 'mediaSections',
  type: 'array',
  of: [
    defineArrayMember({
      type: 'mediaListCurated',
    }),
    defineArrayMember({
      type: 'mediaListFiltered',
    }),
    defineArrayMember({
      type: 'mediaListTrending',
    }),
  ],
})
