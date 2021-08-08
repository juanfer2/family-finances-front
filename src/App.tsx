import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { env } from './contants/api.constant'
import { useDispatch, useSelector } from 'react-redux'
import { isAuth } from './middlewares/authentication.middleware'
/** Styles */
import './App.css'
/** Actions */
import { healtAction } from './flux/actions/healt.action'
import { getUser } from './flux/actions/user/user.action'

import Navbar from './components/navbar'
import List from './components/list'
import Home from './pages/home'
import Auth from './pages/auth'
import SearchBar from './components/searchBar'
import RoutesConfig from './routes'

function App() {
  const dispatch = useDispatch()
  const state: any = useSelector((state: any) => state)

  useEffect(() => {
    const startHealtDispacht = () => dispatch(healtAction())
    startHealtDispacht()
    console.log(env)

    if (isAuth() && !state.userReducer.user) {
      const startGetUser = () => dispatch(getUser())
      startGetUser()
    }
  }, [dispatch])

  console.log(state)

  return (
    <div className="App ">
      <Router>
        <div className="">
          <Navbar name={'Family Finances'} />
          {/** <Auth/>*/}
          {/** <Home />*/}
          {/** <SearchBar />
          <List />*/}

          <RoutesConfig />
        </div>
      </Router>
    </div>
  )
}

export default App
