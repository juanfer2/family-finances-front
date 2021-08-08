import { useState, useEffect } from 'react'
/* Formik */
import { useFormik, Formik } from 'formik'
import { validationSchema } from './validationSchema'

const initialState: Project = {
  title: '',
  description: '',
}

export interface Project {
  title: string
  description: string
}

interface useCreateProject {
  state: Project
  formik: any
}

export const useCreateProject = (): useCreateProject => {
  const [state, setState] = useState<Project>(initialState)

  const handleState = (event: any) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  const formik = useFormik({
    validationSchema: validationSchema,
    initialValues: initialState,
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return { state, formik }
}
