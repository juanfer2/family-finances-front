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
      <Paper>
        <h2>Login</h2>
        <div className="login-form">
          <form onSubmit={formik.handleSubmit}>
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
              name="firstName"
              label="FisrtName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
              helperText={touched.firstName && errors.firstName}
            />

            <TextField
              name="lastName"
              label="LastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              helperText={touched.lastName && errors.lastName}
            />

            <TextField
              name="password"
              label="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              helperText={touched.password && errors.password}
            />

            <TextField
              name="passwordConfirmation"
              label="Password Confirmation"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.passwordConfirmation}
              helperText={
                touched.passwordConfirmation && errors.passwordConfirmation
              }
            />

            <Button
              variant="contained"
              color="primary"
              onClick={() => sendData()}
            >
              Register
            </Button>
          </form>
        </div>
      </Paper>
    </div>
  )
}

export default Login
