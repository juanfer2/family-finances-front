import React from 'react'
import { NavLink } from 'react-router-dom'
import List from '../../components/list'
import Fab from '@material-ui/core/Fab'

import CreateProject from './default/createProject'
import { useProjects } from './default/useProjects'
import ListItem from '../../components/list/listItem'
import Loading from '../../components/loading'

function ProjectsModule() {
  const { getProjectsReducer } = useProjects()
  const { projects, loadingProjects, errorProjects } = getProjectsReducer

  if (loadingProjects) return <Loading />
  if (errorProjects) return <div>{'error'}</div>

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
    </div>
  )
}

export default ProjectsModule
