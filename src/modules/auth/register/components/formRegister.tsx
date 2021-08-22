import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

/** Material-UI */
import { TextField, Button } from '@material-ui/core'

function FormRegister({
  formik,
  onSubmit,
}: InferProps<typeof FormRegister.propTypes>) {
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
    <div className="login-form">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email}
          helperText={touched.email && errors.email}
        />

        <TextField
          name="firstName"
          label="FisrtName"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
          error={touched.firstName && errors.firstName}
          helperText={touched.firstName && errors.firstName}
        />

        <TextField
          name="lastName"
          label="LastName"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
          error={touched.lastName && errors.lastName}
          helperText={touched.lastName && errors.lastName}
        />

        <TextField
          name="password"
          label="Password"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          error={touched.password && errors.password}
          helperText={touched.password && errors.password}
        />

        <TextField
          name="passwordConfirmation"
          label="Password Confirmation"
          variant="outlined"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.passwordConfirmation}
          error={touched.passwordConfirmation && errors.passwordConfirmation}
          helperText={
            touched.passwordConfirmation && errors.passwordConfirmation
          }
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => onSubmit()}
        >
          Register
        </Button>
      </form>
    </div>
  )
}

FormRegister.propTypes = {
  formik: PropTypes.any.isRequired,
  onSubmit: PropTypes.any.isRequired,
}

export default FormRegister
