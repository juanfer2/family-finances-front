import React from 'react'
import '../../styles/main.css'

import { Meta } from '@storybook/react'

import Loading from '../../components/loading'

export default {
  component: Loading,
  title: 'Components/loading',
} as Meta

export const Primary: React.VFC<{}> = () => <Loading />
