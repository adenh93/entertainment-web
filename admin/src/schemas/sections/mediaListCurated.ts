import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  title: 'Media List - Curated',
  name: 'mediaListCurated',
  type: 'object',
  fields: [
    defineField({
      title: 'Settings',
      name: 'settings',
      type: 'mediaListSettings',
    }),
    defineField({
      title: 'Items',
      name: 'items',
      type: 'array',
      of: [defineArrayMember({type: 'reference', weak: true, to: {type: 'media'}})],
    }),
  ],
  preview: {
    select: {
      title: 'settings.title',
    },
  },
})
