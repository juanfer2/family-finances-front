import React from 'react'
import { useFormExpense } from './useFormExpense'
import { Paper, TextField, Button } from '@material-ui/core'
import { Expense } from '../../../interfaces/entities/expense'

function FormExpense({ initialState }: { initialState?: Expense }) {
  const { formik } = useFormExpense(initialState)

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
    <div className="create-expense">
      <form className="form-list" onSubmit={handleSubmit}>
        <TextField
          error={touched.name && errors.name ? true : false}
          name="name"
          label="Name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.name && errors.name}
        />

        <TextField
          error={touched.description && errors.description ? true : false}
          name="description"
          label="Description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.description && errors.description}
        />

        <TextField
          error={touched.priceTotal && errors.priceTotal ? true : false}
          name="priceTotal"
          label="Price Total"
          type="number"
          value={values.priceTotal}
          onChange={handleChange}
          onBlur={handleBlur}
          helperText={touched.priceTotal && errors.priceTotal}
        />

        <Button variant="contained" color="primary" type="submit">
          Create
        </Button>
      </form>
    </div>
  )
}

export default FormExpense
