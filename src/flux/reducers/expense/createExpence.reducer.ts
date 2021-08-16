import {
  CREATE_EXPENCE_START,
  CREATE_EXPENCE_SUCCESS,
  CREATE_EXPENCE_ERROR,
} from '../../../contants/expense.constant'

import { ExpenceReducerState } from '../../../interfaces/entities/expense'
import { ActionReducerType } from '../../../interfaces/flux'

const initialState: ExpenceReducerState = {
  expence: null,
  loadingExpence: false,
  errorExpence: null,
}

export default function (
  state: ExpenceReducerState = initialState,
  action: ActionReducerType,
) {
  switch (action.type) {
    case CREATE_EXPENCE_START:
      return {
        ...state,
        loadingExpence: true,
        expence: null,
        errorExpence: null,
      }
    case CREATE_EXPENCE_SUCCESS:
      return { ...state, expence: action.payload, loadingExpence: true }
    case CREATE_EXPENCE_ERROR:
      return {
        ...state,
        expence: null,
        loadingExpence: false,
        errorExpence: action.payload,
      }
    default:
      return state
  }
}
