export type LoginType = {
  email: string
  firstName: string
  lastName: string
  password: string
  passwordConfirmation: string
}

export type RegisterType = {
  email: string
  firstName: string
  lastName: string
  password: string
  passwordConfirmation: string
}

export type useLoginType = {
  state: LoginType
  handleState: Function
  sendData: Function
  formik: any
}

export type useRegisterType = {
  state: RegisterType
  handleState: Function
  sendData: Function
  formik: any
}
