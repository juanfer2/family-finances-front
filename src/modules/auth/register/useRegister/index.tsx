import { useState, useEffect } from 'react'

/*Redux */
import { useDispatch, useSelector } from 'react-redux'
import { RegisterUser } from '../../../../flux/actions/auth/register.action'

/** Types */
import { RegisterType, useRegisterType } from '../../../../types/modules/auth'

/* Formik */
import { useFormik } from 'formik'
import { validationSchema } from './validationSchema'

const initialState: RegisterType = {
  email: 'jfvilladiego3@gmail.com',
  firstName: 'sdf',
  lastName: 'sdf',
  password: 'asdqwe123',
  passwordConfirmation: 'asdqwe123',
}

export const useRegister = (): useRegisterType => {
  const dispatch = useDispatch()

  const [state, setState] = useState<RegisterType>(initialState)

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
      console.log('trest')
      const registerUser = (user: any) => dispatch(RegisterUser(user))
      registerUser(values)
    },
  })

  return { state, handleState, sendData, formik }
}
