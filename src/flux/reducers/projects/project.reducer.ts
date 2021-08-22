import {
  CREATE_PROJECT_START,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_ERROR,
} from '../../../contants/project.constant'

import { ProjectsReducerState } from '../../../interfaces/entities/project'
import { ActionReducerType } from '../../../interfaces/flux'

const initialState: ProjectsReducerState = {
  projects: [],
  loadingProjects: false,
  errorProjects: null,
}

export default function (
  state: ProjectsReducerState = initialState,
  action: ActionReducerType,
) {
  switch (action.type) {
    case CREATE_PROJECT_START:
      return {
        ...state,
        loadingProjects: true,
        projects: null,
        errorProjects: null,
      }
    case CREATE_PROJECT_SUCCESS:
      return { ...state, projects: action.payload, loadingProjects: true }
    case CREATE_PROJECT_ERROR:
      return {
        ...state,
        projects: null,
        loadingProjects: false,
        errorProjects: action.payload,
      }
    default:
      return state
  }
}
