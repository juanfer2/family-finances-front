import { string, object, number, date } from 'yup'

export const validationSchema = object({
  name: string().required('Este campo es requerido'),
  projectId: number().positive().required('Este campo es requerido'),
  description: string().required('Este campo es requerido'),
  priceTotal: number().positive().required('Este campo es requerido'),
})
