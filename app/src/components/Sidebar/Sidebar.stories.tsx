import type { Meta, StoryObj } from '@storybook/react'
import Navigation from '@/components/Navigation'
import Sidebar from './Sidebar'
import Account from '@/components/Account'

const meta: Meta<typeof Sidebar> = {
  title: 'Sidebar',
  component: Sidebar,
}

export default meta

type Story = StoryObj<typeof Sidebar>

export const Primary: Story = {
  args: {
    children: (
      <>
        <Navigation />
        <Account />
      </>
    ),
  },
}
