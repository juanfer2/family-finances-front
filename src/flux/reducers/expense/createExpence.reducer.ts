import {
  CREATE_EXPENSE_START,
  CREATE_EXPENSE_SUCCESS,
  CREATE_EXPENSE_ERROR,
} from '../../../contants/expense.constant'

import { ExpenseReducerState } from '../../../interfaces/entities/expense'
import { ActionReducerType } from '../../../interfaces/flux'

const initialState: ExpenseReducerState = {
  expense: null,
  loadingExpense: false,
  errorExpense: null,
}

export default function (
  state: ExpenseReducerState = initialState,
  action: ActionReducerType,
) {
  switch (action.type) {
    case CREATE_EXPENSE_START:
      return {
        ...state,
        loadingExpense: true,
        expense: null,
        errorExpense: null,
      }
    case CREATE_EXPENSE_SUCCESS:
      return { ...state, expense: action.payload, loadingExpense: true }
    case CREATE_EXPENSE_ERROR:
      return {
        ...state,
        expense: null,
        loadingExpense: false,
        errorExpense: action.payload,
      }
    default:
      return state
  }
}
