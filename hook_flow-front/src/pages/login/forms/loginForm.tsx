import { useCallback, useMemo, useState } from 'react'
import { Input, Title, Typography } from '../../../components'
import { useAuth } from '@/hooks'
import { Button } from '@/components'
import { isEmailValid, isRequiredValid } from '@/utils'
import * as S from '../page.styles'

type LoginFormProps = {
  onRegisterClick: () => void
}

export const LoginForm = ({ onRegisterClick }: LoginFormProps) => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const { onLoginSubmit, loading, error } = useAuth();

  const isEmailInvalid = useMemo(() => {
    if (!isRequiredValid(formData.email)) return false

    return !isEmailValid(formData.email)
  }, [formData.email])

  const errorMessage = useMemo(() => {
    if (isEmailInvalid) return 'Email incorreto'
    if (error) return 'Email ou senha invalidos'

    return null
  }, [error, isEmailInvalid])

  const isSubmitDisabled = useMemo(() =>
    loading ||
    !isRequiredValid(formData.email) ||
    !isRequiredValid(formData.password) ||
    isEmailInvalid,
    [loading, formData, isEmailInvalid]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = useCallback(async () => {
    if (isEmailInvalid) return
    await onLoginSubmit({
      email: formData.email,
      password: formData.password
    })
  }, [formData, isEmailInvalid, onLoginSubmit])

  return (
    <S.Form>
      <div>
        <Title type="h2" color="#000">Bem vindo de volta</Title>
        <Typography>Faça o login para acessar sua conta</Typography>
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
      <Button style={{ justifyContent: 'center' }} onClick={handleSubmit} disabled={isSubmitDisabled}>Fazer login</Button>
      {errorMessage && <Typography color="#dc2626">{errorMessage}</Typography>}
      <div>
        <S.SwitchText>
          Ainda nao tem conta?
          <button type="button" onClick={onRegisterClick}>Registrar</button>
        </S.SwitchText>
        <S.SwitchText>
          <button type="button" onClick={onRegisterClick}>Esqueci minha senha</button>
        </S.SwitchText>
      </div>
    </S.Form>
  )
}
