import { useCallback, useMemo, useState } from 'react'
import { Input, Title, Typography } from '../../../components'
import { useAuth } from '@/hooks'
import { Button } from '@/components'
import * as S from '../page.styles'

type LoginFormProps = {
  onRegisterClick: () => void
}

export const LoginForm = ({ onRegisterClick }: LoginFormProps) => {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const { onLoginSubmit, loading, error } = useAuth();
  const isSubmitDisabled = useMemo(() => loading || !formData.email.trim() || !formData.password, [loading, formData]);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = useCallback(async () => {
    await onLoginSubmit({
      email: formData.email,
      password: formData.password
    })
  }, [formData])

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
      {error && <Typography color="#dc2626">Email ou senha invalidos</Typography>}
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
