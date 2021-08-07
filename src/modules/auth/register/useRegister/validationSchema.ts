import { string, object, number, SchemaOf } from 'yup'

export const validationSchema = object({
  email: string()
    .required('Este campo es requerido')
    .email('Este campo debe de ser un email'),
  firstName: string().required('Este campo es requerido'),
  lastName: string().required('Este campo es requerido'),
  password: string().required('Este campo es requerido'),
  passwordConfirmation: string().required('Este campo es requerido'),
})
