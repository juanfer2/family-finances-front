import React from 'react'
import List from '../../components/list'
import Fab from '@material-ui/core/Fab'

import CreateProject from './default/createProject'
import { useProjects } from './default/useProjects'
import ListItem from '../../components/list/listItem'
import { NavLink } from 'react-router-dom'

function ProjectsModule() {
  const { getProjectsReducer } = useProjects()
  const { projects } = getProjectsReducer

  return (
    <div className="projects">
      <List>
        {projects &&
          projects.map((project: any) => (
            <NavLink key={project.id} to={`/projects/${project.id}`}>
              <ListItem key={project.id} title={project.title} />
            </NavLink>
          ))}
      </List>

      <CreateProject />
      <Fab variant="extended" color="primary" aria-label="add">
        Created
      </Fab>
    </div>
  )
}

export default ProjectsModule
