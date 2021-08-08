import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { loginUser } from '../../../flux/actions/auth/login.action'

/** Types */
import { LoginType, useLoginType } from '../../../types/modules/auth'

/* Formik */
import { useFormik } from 'formik'
import { validationSchema } from './validationSchema'

const initialState: LoginType = {
  email: 'fer@gmail.com',
  password: 'asdqwe123',
}

export const useLogin = (): useLoginType => {
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
      console.log(values)
      const startLoginUser = (user: any) => dispatch(loginUser(user))
      startLoginUser(values)
    },
  })

  return { state, handleState, sendData, formik }
}
