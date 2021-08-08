import { combineReducers } from 'redux'
import healtReducer from './healt.reducer'
import RegisterReducer from './auth/register'
import LoginReducer from './auth/login'
import userReducer from './user/user'

export default combineReducers({
  healtReducer,
  RegisterReducer,
  LoginReducer,
  userReducer,
})
