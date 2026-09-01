import { Outlet, useLocation } from 'react-router-dom'
import { Button, Select, Sidebar, Title, UserDropdown } from '../'
import { useState } from 'react'
import type { HeaderActions } from '@/types/appLayout'
import * as S from './appLayout.styles'

const Headings: Record<string, string> = {
  '/dashboard': 'Dashboard',
  '/applications': 'Aplicações',
  '/webhooks': 'Webhooks',
  '/events': 'Eventos',
  '/sends': 'Entregas',
  '/admin': 'Painel de administrador'
}

const SubHeadings: Record<string, string> = {
  '/dashboard': 'Visão geral da sua atividade na HookFlow',
  '/applications': 'Gerencie as aplicações que enviam eventos para HookFloow',
  '/webhooks': 'Endpoints que recebem os eventos da sua aplicação',
  '/events': 'Eventos recebidos da sua aplicação',
  '/sends': 'Historico de entregas para os webhooks',
  '/admin': 'Gerencie os usuários'
}

export function AppLayout() {
  const [headerAction, setHeaderAction] = useState<HeaderActions>(null);
  const location = useLocation();
  const headerActions = Array.isArray(headerAction) ? headerAction : headerAction ? [headerAction] : [];

  return (
    <>
      <S.Main aria-label="Main">
        {location.pathname !== "/login" && <Sidebar />}
        <S.Content>
          {location.pathname !== "/login" && (
            <S.Header>
              <S.HeaderContent>
                <Title type='h1' color='#000'>{Headings[location.pathname]}</Title>
                <UserDropdown />
              </S.HeaderContent>
              <S.HeaderContent>
                <Title type='h3'>{SubHeadings[location.pathname]}</Title>
                {headerActions.length > 0 && (
                  <S.HeaderActions>
                    {headerActions.map((action) => {
                      if (action.type === 'select') {
                        return (
                          <Select
                            key={action.label}
                            label=""
                            placeholder={action.placeholder}
                            value={action.value}
                            onChange={action.onChange}
                            options={action.options}
                          />
                        )
                      }

                      return <Button key={action.label} style={{ maxHeight: '50px' }} onClick={action.onClick}>{action.label}</Button>
                    })}
                  </S.HeaderActions>
                )}
              </S.HeaderContent>
            </S.Header>
          )}
          <S.PageContent>
            <Outlet context={{ setHeaderAction }} />
          </S.PageContent>
        </S.Content>
      </S.Main>
    </>
  )
}

AppLayout.displayName = 'AppLayout'
