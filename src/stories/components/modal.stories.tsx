import React from 'react'
import '../../styles/main.css'

import { Meta } from '@storybook/react'

import Modal from '../../components/modal'

export default {
  component: Modal,
  title: 'Components/modal',
} as Meta

export const Primary: React.VFC<{}> = () => (
  <Modal titleBtn="Open">
    <h6>Text modal</h6>
  </Modal>
)
