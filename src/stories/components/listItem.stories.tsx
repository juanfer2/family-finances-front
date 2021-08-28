import React from 'react'
import '../../styles/main.css'

import { Meta } from '@storybook/react'

import ListItem from '../../components/list/listItem'

export default {
  component: ListItem,
  title: 'Components/ListItem/ListItem',
} as Meta

export const Primary: React.VFC<{}> = () => (
  <ListItem title="Item" description="Description" />
)
