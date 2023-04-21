import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'Media Page Settings',
  name: 'mediaPageSettings',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Media Sections',
      name: 'mediaSections',
      type: 'mediaSections',
    }),
  ],
})
