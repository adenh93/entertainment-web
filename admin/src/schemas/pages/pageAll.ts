import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'All Media Page',
  name: 'pageAll',
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
