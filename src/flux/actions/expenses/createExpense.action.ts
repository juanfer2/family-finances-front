import {
  CREATE_EXPENSE_START,
  CREATE_EXPENSE_SUCCESS,
  CREATE_EXPENSE_ERROR,
} from '../../../contants/expense.constant'

import { Expense } from '../../../interfaces/entities/expense'
import Client from '../../../services/graphqlService/graphql.service.service'
import { CREATE_EXPENSE } from '../../../graphql/expenses/mutations'

const startCreateExpence = () => {
  return { type: CREATE_EXPENSE_START }
}

const successCreateExpence = (expense: Expense) => {
  return { type: CREATE_EXPENSE_SUCCESS, payload: expense }
}

const errorCreateExpence = (error: any) => {
  return { type: CREATE_EXPENSE_ERROR, payload: error }
}

export const createExpense = (data: Expense) => {
  return async (dispatch: any) => {
    try {
      dispatch(startCreateExpence())
      console.log(data)

      const response = await Client.mutate({
        variables: data,
        mutation: CREATE_EXPENSE,
      })

      console.log('response')
      console.log(response)

      dispatch(successCreateExpence(response.data.createProject))
    } catch (error) {
      console.log(error)
      dispatch(errorCreateExpence(error))
    }
  }
}
