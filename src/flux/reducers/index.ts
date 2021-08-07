import { combineReducers } from 'redux'
import healtReducer from './healt.reducer'
import RegisterReducer from './auth/register'

export default combineReducers({
  healtReducer,
  RegisterReducer,
})
