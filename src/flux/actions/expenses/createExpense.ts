import {
  CREATE_EXPENCE_START,
  CREATE_EXPENCE_SUCCESS,
  CREATE_EXPENCE_ERROR,
} from '../../../contants/expense.constant'

import { Expence } from '../../../interfaces/entities/expense'
import Client from '../../../services/graphqlService/graphql.service.service'
import { CREATE_EXPENCE } from '../../../graphql/expence/mutations'

const startCreateExpence = () => {
  return { type: CREATE_EXPENCE_START }
}

const successCreateExpence = (expence: Expence) => {
  return { type: CREATE_EXPENCE_SUCCESS, payload: expence }
}

const errorCreateProject = (error: any) => {
  return { type: CREATE_EXPENCE_ERROR, payload: error }
}

export const CreateProject = (data: Expence) => {
  return async (dispatch: any) => {
    try {
      dispatch(startCreateExpence())

      const response = await Client.mutate({
        variables: data,
        mutation: CREATE_EXPENCE,
      })

      dispatch(successCreateExpence(response.data.createProject))
    } catch (error) {
      console.log(error)
      dispatch(errorCreateProject(error))
    }
  }
}
