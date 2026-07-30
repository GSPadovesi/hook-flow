import { useCallback, useMemo, useState } from 'react'
import { Button, Input, Typography } from '../../../components'
import * as S from '../page.styles'
import { useAuth } from '@/hooks'
import { isEmailValid, isPasswordConfirmationValid, isRequiredValid } from '@/utils'

type RegisterFormProps = {
  onLoginClick: () => void
}

export const RegisterForm = ({ onLoginClick }: RegisterFormProps) => {
  const { onRegisterSubmit, loading, error } = useAuth();

  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  })

  const isEmailInvalid = useMemo(() => {
    if (!isRequiredValid(formData.email)) return false

    return !isEmailValid(formData.email)
  }, [formData.email])

  const isPasswordConfirmInvalid = useMemo(() => {
    if (!formData.passwordConfirm) return false

    return !isPasswordConfirmationValid(formData.password, formData.passwordConfirm)
  }, [formData.password, formData.passwordConfirm])

  const errorMessage = useMemo(() => {
    if (isEmailInvalid) return 'Email incorreto'
    if (isPasswordConfirmInvalid) return 'Senha e confirmacao de senha nao batem'
    if (error) return 'Nao foi possivel criar sua conta'

    return null
  }, [error, isEmailInvalid, isPasswordConfirmInvalid])

  const isSubmitDisabled = useMemo(() =>
    loading ||
    !isRequiredValid(formData.username) ||
    !isRequiredValid(formData.name) ||
    !isRequiredValid(formData.email) ||
    !isRequiredValid(formData.password) ||
    !isRequiredValid(formData.passwordConfirm) ||
    isEmailInvalid ||
    isPasswordConfirmInvalid,
    [loading, formData, isEmailInvalid, isPasswordConfirmInvalid]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = useCallback(async () => {
    if (isEmailInvalid || isPasswordConfirmInvalid) return;

    await onRegisterSubmit({
      username: formData.username,
      name: formData.name,
      email: formData.email,
      password: formData.password
    })
  }, [formData, isEmailInvalid, isPasswordConfirmInvalid, onRegisterSubmit])

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
      <Input
        label="Confirme sua senha"
        name="passwordConfirm"
        type="password"
        placeholder="Sua senha"
        value={formData.passwordConfirm}
        onChange={handleChange}
      />
      <Button style={{ justifyContent: 'center' }} onClick={handleSubmit} disabled={isSubmitDisabled}>Cadastrar</Button>
      {errorMessage && <Typography color="#dc2626">{errorMessage}</Typography>}

      <S.SwitchText>
        Ja tem conta?
        <button type="button" onClick={onLoginClick}>Entrar</button>
      </S.SwitchText>
    </S.Form>
  )
}
