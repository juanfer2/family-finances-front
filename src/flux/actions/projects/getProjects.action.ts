import {
  GET_PROJECTS_START,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
} from '../../../contants/project.constant'

import { Project } from '../../../interfaces/entities/project'
import Client from '../../../services/graphqlService/graphql.service.service'
import { GET_PROJECTS } from '../../../graphql/projects/queries'

const startGetProjects = () => {
  return { type: GET_PROJECTS_START }
}

const successGetProjects = (project: any) => {
  return { type: GET_PROJECTS_SUCCESS, payload: project }
}

const errorGetProjects = (error: any) => {
  return { type: GET_PROJECTS_ERROR, payload: error }
}

export const getProjects = () => {
  return async (dispatch: any) => {
    try {
      dispatch(startGetProjects())
      const response = await Client.query({
        query: GET_PROJECTS,
      })
      dispatch(successGetProjects(response.data.projects))
    } catch (error) {
      console.log(error)
      dispatch(errorGetProjects(error))
    }
  }
}
