import {defineField, defineType} from 'sanity'
import {MediaTypes} from '../../constants'

export default defineType({
  title: 'Media List - Filtered',
  name: 'mediaListFiltered',
  type: 'object',
  fieldsets: [{name: 'filters'}],
  fields: [
    defineField({
      title: 'Settings',
      name: 'settings',
      type: 'mediaListSettings',
    }),
    defineField({
      title: 'Amount',
      name: 'amount',
      description: 'Amount of items to render',
      type: 'number',
      initialValue: 10,
      validation: (Rule) => Rule.required().min(1).max(30),
    }),
    defineField({
      title: 'Filter By Genre',
      name: 'genreFilter',
      type: 'reference',
      to: {type: 'mediaGenre'},
      fieldset: 'filters',
    }),
    defineField({
      title: 'Filter by Type',
      name: 'typeFilter',
      type: 'string',
      options: {
        list: MediaTypes,
        layout: 'dropdown',
      },
      fieldset: 'filters',
    }),
    defineField({
      title: 'Filter by Rating',
      name: 'ratingFilter',
      type: 'reference',
      to: {type: 'mediaRating'},
      fieldset: 'filters',
    }),
  ],
  preview: {
    select: {
      title: 'settings.title',
    },
  },
})
