import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Rating',
  name: 'mediaRating',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Code',
      name: 'code',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'code',
      },
    }),
  ],
  preview: {
    select: {
      title: 'code',
      subtitle: 'title',
    },
  },
})
