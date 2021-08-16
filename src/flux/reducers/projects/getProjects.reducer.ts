import {
  GET_PROJECTS_START,
  GET_PROJECTS_SUCCESS,
  GET_PROJECTS_ERROR,
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
    case GET_PROJECTS_START:
      return {
        ...state,
        loadingProjects: true,
        projects: null,
        errorProjects: null,
      }
    case GET_PROJECTS_SUCCESS:
      return { ...state, projects: action.payload, loadingProjects: true }
    case GET_PROJECTS_ERROR:
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
