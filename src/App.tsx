import React, { useEffect } from 'react'
import { env } from './contants/api.constant'
import { useDispatch, useSelector } from 'react-redux'
/** Styles */
import './App.css'
/** Actions */
import { healtAction } from './flux/actions/healt.action'

import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/core'

import Navbar from './components/navbar'
import List from './components/list'
import Home from './pages/home'
import Auth from './pages/auth'
import SearchBar from './components/searchBar'

function App() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state)

  useEffect(() => {
    const startHealtDispacht = () => dispatch(healtAction())
    startHealtDispacht()
    console.log(env)
  }, [dispatch])

  console.log(state)

  return (
    <div className="App ">
      <div className="">
        <Navbar name={'Family Finances'} />
        {/** <Auth/>*/}
        {/** <Home />*/}
        <SearchBar />
        <List />
      </div>
    </div>
  )
}

export default App
