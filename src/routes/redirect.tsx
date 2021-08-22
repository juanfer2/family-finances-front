import React from 'react'
import { Redirect } from 'react-router-dom'

export const redirectTo = (path: string) => {
  return <Redirect to={path} />
}
