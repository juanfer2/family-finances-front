import React from 'react'
import '../../styles/main.css'

import { Meta } from '@storybook/react'

import SnackAlerBar from '../../components/snackAlertBar'

export default {
  component: SnackAlerBar,
  title: 'Components/snackAlerBar',
} as Meta

export const Primary: React.VFC<{}> = () => (
  <SnackAlerBar message="I LOve the Food (**)/" />
)
