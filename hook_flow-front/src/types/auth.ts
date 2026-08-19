export type loginProps = {
  email: string,
  password: string
}

export type registerProps = {
  username: string,
  name: string,
  email: string,
  password: string
}

export type LoginFormProps = {
  onRegisterClick: () => void
}

export type RegisterFormProps = {
  onLoginClick: () => void
}
