import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Page Bookmarks',
  name: 'pageBookmarks',
  type: 'document',
  fields: [
    defineField({
      title: 'Search input text',
      name: 'searchInputText',
      type: 'string',
      initialValue: 'Search for bookmarked shows',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Bookmarked movies title',
      name: 'bookmarkedMoviesTitle',
      type: 'string',
      initialValue: 'Bookmarked Movies',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Bookmarked TV title',
      name: 'bookmarkedTVTitle',
      type: 'string',
      initialValue: 'Bookmarked TV Series',
      validation: (Rule) => Rule.required(),
    }),
  ],
})
