import {
  CREATE_PROJECT_ERROR,
  CREATE_PROJECT_START,
  CREATE_PROJECT_SUCCESS,
} from '../../../contants/project.constant'

import { Project } from '../../../interfaces/entities/project'
import Client from '../../../services/graphqlService/graphql.service.service'
import { CREATE_PROJECT } from '../../../graphql/projects/mutations'

const startCreateProject = () => {
  return { type: CREATE_PROJECT_START }
}

const successCreateProject = (project: any) => {
  return { type: CREATE_PROJECT_SUCCESS, payload: project }
}

const errorCreateProject = (error: any) => {
  return { type: CREATE_PROJECT_ERROR, payload: error }
}

export const CreateProject = (data: Project) => {
  return async (dispatch: any) => {
    try {
      dispatch(startCreateProject())

      const response = await Client.mutate({
        variables: data,
        mutation: CREATE_PROJECT,
      })

      dispatch(successCreateProject(response.data.createProject))
    } catch (error) {
      console.log(error)
      dispatch(errorCreateProject(error))
    }
  }
}
