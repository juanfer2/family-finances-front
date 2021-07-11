import React, { useEffect } from 'react'
import { env } from './contants/api.constant'
import { useDispatch, useSelector } from 'react-redux'
/** Styles */
import './App.css'
/** Actions */
import { healtAction } from './flux/actions/healt.action'

import Navbar from './components/navbar'
import Home from './pages/home'

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
    <div className="App">
      <Navbar />
      <Home />
    </div>
  )
}

export default App
