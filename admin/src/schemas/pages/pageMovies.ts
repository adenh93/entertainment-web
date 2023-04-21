import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Movies Page',
  name: 'pageMovies',
  type: 'document',
  fields: [
    defineField({
      title: 'Settings',
      name: 'settings',
      type: 'mediaPageSettings',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
