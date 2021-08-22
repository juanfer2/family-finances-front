import React from 'react'

import { Route, Redirect } from 'react-router-dom'
import { isAuth } from '../../middlewares/authentication.middleware'

function PrivateRoute({ children, ...rest }: any) {
  const auth = isAuth()
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  )
}

export default PrivateRoute
