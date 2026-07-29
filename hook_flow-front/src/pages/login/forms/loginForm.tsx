import { useState } from 'react'
import { Input, Title, Typography } from '../../../components'
import * as S from '../page.styles'

type LoginFormProps = {
  onRegisterClick: () => void
}

export const LoginForm = ({ onRegisterClick }: LoginFormProps) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  console.log(formData)

  return (
    <S.Form>
      <div>
        <Title type="h2" color="#000">Bem vindo de volta</Title>
        <Typography>Faça o login para acessas a sua conta</Typography>
      </div>
      <Input
        label="Email"
        name="email"
        type="email"
        placeholder="voce@email.com"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        label="Senha"
        name="password"
        type="password"
        placeholder="Sua senha"
        value={formData.password}
        onChange={handleChange}
      />
      <button type="submit">Acessar painel</button>
      <S.SwitchText>
        Ainda nao tem conta?
        <button type="button" onClick={onRegisterClick}>Registrar</button>
      </S.SwitchText>
    </S.Form>
  )
}
