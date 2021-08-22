import {
  GET_PROJECT_START,
  GET_PROJECT_SUCCESS,
  GET_PROJECT_ERROR,
} from '../../../contants/project.constant'

import { ProjectReducerState } from '../../../interfaces/entities/project'
import { ActionReducerType } from '../../../interfaces/flux'

const initialState: ProjectReducerState = {
  project: null,
  loadingProject: false,
  errorProject: null,
}

export default function (
  state: ProjectReducerState = initialState,
  action: ActionReducerType,
) {
  switch (action.type) {
    case GET_PROJECT_START:
      return {
        ...state,
        loadingProject: true,
        project: null,
        errorProject: null,
      }
    case GET_PROJECT_SUCCESS:
      return { ...state, project: action.payload, loadingProject: true }
    case GET_PROJECT_ERROR:
      return {
        ...state,
        project: null,
        loadingProject: false,
        errorProject: action.payload,
      }
    default:
      return state
  }
}
