import {
  GET_PROJECT_START,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_ERROR,
} from '../../../contants/project.constant'

import { Project } from '../../../interfaces/entities/project'
import Client from '../../../services/graphqlService/graphql.service.service'
import { GET_PROJECT } from '../../../graphql/projects/queries'

const startGetProject = () => {
  return { type: GET_PROJECT_START }
}

const successGetProject = (project: any) => {
  return { type: GET_PROJECT_SUCCESS, payload: project }
}

const errorGetProject = (error: any) => {
  return { type: GET_PROJECT_ERROR, payload: error }
}

export const getProject = (id: number) => {
  return async (dispatch: any) => {
    try {
      dispatch(startGetProject())
      const response = await Client.query({
        variables: { id },
        query: GET_PROJECT,
      })
      console.log(response.data.project)
      dispatch(successGetProject(response.data.project))
    } catch (error) {
      console.log(error)
      dispatch(errorGetProject(error))
    }
  }
}
