import { useState } from 'react'
import { Title, Typography } from '../../components'
import { Check } from 'lucide-react'
import { LoginForm, RegisterForm } from './forms'
import * as S from './page.styles'

export const Page = () => {
  const [formMode, setFormMode] = useState<'login' | 'register'>('login')
  const dados: string[] = [
    "Receba eventos com segurança",
    "Entregas confiáveis e rastreáveis",
    "Histórico completo e detalhado"
  ]

  return (
    <S.Page>
      <S.Container>
        <S.Content>
          <S.ContentHeader>
            <img src="/hookflowicon.png" alt="HookFlow" width={72} height={72} />
            <Title type="h1" color="#fff">HookFlow</Title>
          </S.ContentHeader>
          <Title type="h3" color="#fff" fontWeight={400}>Gerencie webhooks de forma simples, confiável e eficiente</Title>
          <S.List>
            {dados.map((item, index) => (
              <S.Item key={index}>
                <S.IconCircle>
                  <Check size={16} />
                </S.IconCircle>
                <Typography>{item}</Typography>
              </S.Item>
            ))}
          </S.List>
        </S.Content>

        <S.Forms>
          {formMode === 'login' ? (
            <LoginForm onRegisterClick={() => setFormMode('register')} />
          ) : (
            <RegisterForm onLoginClick={() => setFormMode('login')} />
          )}
        </S.Forms>
      </S.Container>
    </S.Page>
  )
}
