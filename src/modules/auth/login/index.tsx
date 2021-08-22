import React from 'react'

/** Types */
import { LoginType } from '../../../types/modules/auth'

/** CustomHooks */
import { useLogin } from './useLogin'

import { Paper, TextField, Button } from '@material-ui/core'

function Login() {
  const {
    state,
    handleState,
    sendData,
    formik,
  }: {
    state: LoginType
    handleState: Function
    sendData: Function
    formik: any
  } = useLogin()

  const {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setFieldValue,
  } = formik

  return (
    <div className="login">
      <h2>Login</h2>
      <div className="login-form">
        <form onSubmit={handleSubmit}>
          <TextField
            error={touched.email && errors.email}
            name="email"
            label="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.email && errors.email}
          />

          <TextField
            name="password"
            label="Password"
            type="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            helperText={touched.password && errors.password}
          />

          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={() => sendData()}
          >
            Register
          </Button>
        </form>
      </div>
    </div>
  )
}

export default Login
