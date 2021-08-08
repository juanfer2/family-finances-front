import React from 'react'

import { Route, Switch } from 'react-router-dom'
import { isAuth } from '../middlewares/authentication.middleware'

import Projects from '../pages/projects'
import Home from '../pages/home'
import Auth from '../pages/auth'
import NotFound from '../pages/notFound'
import PrivateRoute from './default/protectedRoutes'

function RoutesConfig() {
  return (
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Auth} />
        <PrivateRoute path="/projects">
          <Projects />
        </PrivateRoute>
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default RoutesConfig
