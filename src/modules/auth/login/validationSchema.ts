import { string, object, number, SchemaOf } from 'yup'

export const validationSchema = object({
  email: string()
    .required('Este campo es requerido')
    .email('Este campo debe de ser un email'),
})
