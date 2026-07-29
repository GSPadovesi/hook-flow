import { useState } from 'react'
import { Input } from '../../../components'
import * as S from '../page.styles'

type RegisterFormProps = {
  onLoginClick: () => void
}

export const RegisterForm = ({ onLoginClick }: RegisterFormProps) => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
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

  return (
    <S.Form>
      <h2>Criar conta</h2>
      <Input
        label="Username"
        name="username"
        placeholder="seu-usuario"
        value={formData.username}
        onChange={handleChange}
      />
      <Input
        label="Name"
        name="name"
        placeholder="Seu nome"
        value={formData.name}
        onChange={handleChange}
      />
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
      <button type="submit">Cadastrar</button>
      <S.SwitchText>
        Ja tem conta?
        <button type="button" onClick={onLoginClick}>Entrar</button>
      </S.SwitchText>
    </S.Form>
  )
}
