import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'TV Series Page',
  name: 'pageTVSeries',
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
