import React from 'react'
import List from '../../components/list'
import Fab from '@material-ui/core/Fab'

import CreateProject from './default/createProject'

function ProjectsModule() {
  return (
    <div className="projects">
      <List />

      <CreateProject />
      <Fab variant="extended" color="primary" aria-label="add">
        Created
      </Fab>
    </div>
  )
}

export default ProjectsModule
