import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/schemas'
import {structure} from './src/structure'

export default defineConfig({
  name: 'default',
  title: 'Entertainment',

  projectId: '1i8qbox6',
  dataset: 'production',

  plugins: [deskTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
