import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://1i8qbox6.api.sanity.io/v1/graphql/production/default',
  generates: {
    'src/graphql/codegen/': {
      preset: 'client',
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}

export default config
