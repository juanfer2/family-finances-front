import React from 'react'

import Icon from '../../icon'

interface ListItem {
  title: string
  description?: any
  destroyAction?(): Function
}

function ListItem({ title, description, destroyAction }: ListItem) {
  return (
    <div className="list-item">
      <div className="list-item__title">
        <div className="icon-container">
          <Icon name="building-house" />
        </div>

        <span className="title">{title}</span>
      </div>

      <div className="list-item__description">
        <span className="item price">{description}</span>

        {destroyAction && (
          <div className="item icon-container" onClick={destroyAction}>
            <Icon name="trash-alt" />
          </div>
        )}

        <div className="item icon-container">
          <Icon name="pencil" />
        </div>
      </div>
    </div>
  )
}

export default ListItem
