import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'media',
  type: 'document',
  title: 'Media',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
    }),
    defineField({
      name: 'posterImage',
      type: 'image',
      title: 'Poster Image',
    }),
    defineField({
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          {title: 'Movie', value: 'movie'},
          {title: 'TV Show', value: 'tvShow'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mediaGenre',
      title: 'Genre',
      type: 'reference',
      to: {type: 'mediaGenre'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'reference',
      to: {type: 'mediaRating'},
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'mediaType',
      media: 'posterImage',
    },
  },
})
