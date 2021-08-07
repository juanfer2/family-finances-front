import React from 'react'
import PropTypes from 'prop-types'
import { NavbarType } from './types'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@material-ui/core'
// import MenuIcon from '@material-ui/icons/Menu';

import Icon from '../icon'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

function Navbar({ name = 'myValue' }: NavbarType) {
  const classes = useStyles()

  return (
    <nav className="navbar">
      <div className="navbar__logo-content">
        <span>
          <Icon name="ghost" type="s" />
          FamilyFinace
        </span>
      </div>

      <div className="navbar__list-menu">
        <div className="item-menu">
          <Icon name="menu" active={true} />
        </div>

        <div className="item-menu">
          <i className="icon bx bx-menu"></i>
        </div>

        <div className="item-menu">
          <i className="icon bx bx-menu"></i>
        </div>

        <div className="item-menu">
          <i className="icon bx bx-menu"></i>
        </div>
      </div>
    </nav>
  )
  /*
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          {name}
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
  */
}

// https://fettblog.eu/typescript-react/prop-types/
// visionamos\jvilladiego

//Navbar.propTypes = {
//  name: PropTypes.string.isRequired
//}

export default Navbar
