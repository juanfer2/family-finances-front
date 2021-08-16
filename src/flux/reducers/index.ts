import { combineReducers } from 'redux'
import healtReducer from './healt.reducer'
import RegisterReducer from './auth/register'
import LoginReducer from './auth/login'
import userReducer from './user/user'
import projectReducer from './projects/project.reducer'
import getProjectsReducer from './projects/getProjects.reducer'
import getProjectReducer from './projects/getProject.reducer'
import createExpenceReducer from './expense/createExpence.reducer'

export default combineReducers({
  healtReducer,
  RegisterReducer,
  LoginReducer,
  userReducer,
  projectReducer,
  getProjectsReducer,
  getProjectReducer,
  createExpenceReducer,
})
