import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Media List Settings',
  name: 'mediaListSettings',
  type: 'object',
  fields: [
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Tile Size',
      name: 'tileSize',
      type: 'string',
      options: {
        list: [
          {title: 'Small', value: 'sm'},
          {title: 'Medium', value: 'md'},
        ],
        layout: 'radio',
      },
      initialValue: 'sm',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Layout Type',
      name: 'layoutType',
      type: 'string',
      options: {
        list: ['carousel', 'grid'],
        layout: 'radio',
      },
      initialValue: 'carousel',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
