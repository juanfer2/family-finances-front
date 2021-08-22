import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory } from 'react-router-dom'

/* Formik */
import { useFormik, Formik } from 'formik'
import { validationSchema } from './validationSchema'

import { CreateProject } from '../../../flux/actions/projects/createProject.action'

const initialState: Project = {
  title: '',
  description: '',
}

export interface Project {
  title: string
  description: string
}

interface useCreateProject {
  formik: any
}

export const useCreateProject = (): useCreateProject => {
  const history = useHistory()
  const dispatch = useDispatch()
  const startCreateProject = (project: Project) =>
    dispatch(CreateProject(project))

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: initialState,
    onSubmit: async (values) => {
      await startCreateProject(values)
      history.push('/projects')
    },
  })

  return { formik }
}
