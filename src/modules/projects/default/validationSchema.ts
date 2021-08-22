import { string, object } from 'yup'

export const validationSchema = object({
  title: string().required('Este campo es requerido'),
})
