import { useState, useEffect } from 'react'

/** Types */
import { LoginType, useLoginType } from '../../../types/modules/auth'

/* Formik */
import { useFormik } from 'formik'
import { validationSchema } from './validationSchema'

const initialState: LoginType = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  passwordConfirmation: '',
}

export const useLogin = (): useLoginType => {
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
    },
  })

  return { state, handleState, sendData, formik }
}
