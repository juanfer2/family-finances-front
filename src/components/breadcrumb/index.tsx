import React from 'react'
import { Typography, Breadcrumbs, Link } from '@material-ui/core'

function Breadcrumb() {
  return (
    <div className="breadcrumb">
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href="/">
          Family-Finnances
        </Link>
        <Link color="inherit" href="/projects">
          Projects
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>
    </div>
  )
}

export default Breadcrumb
