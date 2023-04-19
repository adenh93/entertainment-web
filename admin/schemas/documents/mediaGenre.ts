import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Genre',
  name: 'mediaGenre',
  type: 'document',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
  ],
})
