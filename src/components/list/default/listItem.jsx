import React from 'react'

import Icon from '../../icon'

function ListItem() {
  return (
    <div className="list-item">
      <div className="list-item__title">
        <div className="icon-container">
          <Icon name="building-house" />
        </div>
        <span className="title">Apartamento</span>
      </div>

      <div className="list-item__description">
        <span className="item price">2'700.000</span>

        <div className="item icon-container">
          <Icon name="pencil" />
        </div>
      </div>
    </div>
  )
}

export default ListItem
