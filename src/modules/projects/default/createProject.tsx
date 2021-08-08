import React from 'react'
import List from '../../../components/list'
import Modal from '../../../components/modal'
import { Paper, TextField, Button, Fab } from '@material-ui/core'

import { useCreateProject } from './useCreateProject'

function CreateProject() {
  const { state, formik } = useCreateProject()

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
    <div>
      <Modal title="Create new project">
        <form className="form-create" onSubmit={formik.handleSubmit}>
          <TextField
            className="item"
            name="title"
            label="Title"
            error={touched.title && errors.title && true}
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.title && errors.title}
          />

          <TextField
            className="item"
            name="description"
            label="Description"
            error={touched.description && errors.description}
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={touched.description && errors.description}
          />

          <Fab
            type="submit"
            variant="extended"
            color="primary"
            aria-label="add"
          >
            Created
          </Fab>
        </form>
      </Modal>
    </div>
  )
}

export default CreateProject
