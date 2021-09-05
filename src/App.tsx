import React, { useEffect, useState } from 'react'
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
import RoutesConfig from './routes'
import SnackAlerBar from './components/snackAlertBar'
import Breadcrumb from './components/breadcrumb'
import { socket } from './services/socketIOService'
import { Button } from '@material-ui/core'

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

  useEffect(() => {
    healtSocket()
    sendHealtSocket()
  }, [])

  const healtSocket = () => {
    socket.on('healt', (data: any) => {
      console.log('recibe')
      console.log(data)
    })
  }

  const sendHealtSocket = () => {
    console.log('click')
    socket.emit('healt', { data: 'ok' })
  }

  return (
    <div className="App ">
      <SnackAlerBar message="I LOve the Food (**)/" />
      <Router forceRefresh={true}>
        <div className="">
          <Navbar name={'Family Finances'} />
          {isAuth() && <Breadcrumb />}
          <Button onClick={() => sendHealtSocket()}>Click me</Button>
          <RoutesConfig />
        </div>
      </Router>
    </div>
  )
}

export default App
