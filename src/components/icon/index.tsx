import React from 'react'

type IconType = {
  name: string
  type?: string
  active?: boolean
}

function Icon({ name, type = '', active }: IconType) {
  const isActive = active ? 'icon--active' : ''

  return <i className={`icon ${isActive} bx bx${type}-${name}`}></i>
}

export default Icon
