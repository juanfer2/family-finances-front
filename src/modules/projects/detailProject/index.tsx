import React from 'react'
import { NavLink } from 'react-router-dom'
import List from '../../../components/list'
import ListItem from '../../../components/list/listItem'
import { useDetailProject } from './useDetailProject'

function DetailProjectModule() {
  const { getProjectReducer } = useDetailProject()
  const { project } = getProjectReducer

  return (
    <div>
      <h3>{project && project.title}</h3>
      <List></List>
    </div>
  )
}

export default DetailProjectModule
