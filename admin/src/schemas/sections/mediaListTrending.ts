import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Media List - Trending',
  name: 'mediaListTrending',
  type: 'object',
  fields: [
    defineField({
      title: 'Settings',
      name: 'settings',
      type: 'mediaListSettings',
    }),
    defineField({
      title: 'Amount',
      name: 'amount',
      type: 'number',
      initialValue: 10,
      validation: (Rule) => Rule.required().min(1).max(30),
    }),
  ],
  preview: {
    select: {
      title: 'settings.title',
    },
  },
})
