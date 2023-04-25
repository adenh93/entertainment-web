import type { Meta, StoryObj } from '@storybook/react'
import SearchInput from './SearchInput'

const meta: Meta<typeof SearchInput> = {
  title: 'SearchInput',
  component: SearchInput,
}

export default meta

type Story = StoryObj<typeof SearchInput>

export const Primary: Story = {
  args: {
    placeholder: 'Search for movies or TV series',
  },
}
