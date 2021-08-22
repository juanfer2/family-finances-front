import React, { Fragment } from 'react'
import { NavbarType } from './types'
import { isAuth } from '../../middlewares/authentication.middleware'
import Icon from '../icon'

function Navbar({ name = 'myValue' }: NavbarType) {
  const isCurrentUser = isAuth()

  return (
    <nav className="navbar">
      <div className="navbar__logo-content">
        <span>
          <Icon name="ghost" type="s" />
          FamilyFinace
        </span>
      </div>

      <div className="navbar__list-menu">
        {isCurrentUser ? (
          <Fragment>
            <div className="item-menu">
              <Icon name="menu" />
            </div>

            <div className="item-menu">
              <Icon name="layer-plus" type="s" active={true} />
            </div>

            <div className="item-menu">
              <Icon name="log-out" />
            </div>
          </Fragment>
        ) : (
          <div className="item-menu">Register</div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
