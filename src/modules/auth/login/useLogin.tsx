import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { loginUser } from '../../../flux/actions/auth/login.action'

/** Types */
import { LoginType, useLoginType } from '../../../types/modules/auth'

/* Formik */
import { useFormik } from 'formik'
import { validationSchema } from './validationSchema'

const initialState: LoginType = {
  email: 'jfvilladiego3@gmail.com',
  password: '123456',
}

export const useLogin = (): useLoginType => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [state, setState] = useState<LoginType>(initialState)

  const handleState = (event: any) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  const sendData = () => {
    console.log(state)
  }

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: initialState,
    onSubmit: (values) => {
      const startLoginUser = (user: any) => dispatch(loginUser(user))
      startLoginUser(values)
      history.push('/projects')
    },
  })

  return { state, handleState, sendData, formik }
}
