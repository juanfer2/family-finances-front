import React from 'react'
import '../../styles/main.css'

import { ComponentStory, ComponentMeta } from '@storybook/react'

import Icon from '../../components/icon'

export default {
  title: 'Components/Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const Primary = Template.bind({})
Primary.args = {
  name: 'building-house',
}
