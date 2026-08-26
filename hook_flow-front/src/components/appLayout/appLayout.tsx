import { Outlet, useLocation } from 'react-router-dom'
import { Button, Sidebar, Title, UserDropdown } from '../'
import * as S from './appLayout.styles'
import type { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'

export type HeaderAction = {
  label: string
  onClick: () => void
}

export type AppLayoutOutletContext = {
  setHeaderAction: Dispatch<SetStateAction<HeaderAction | null>>
}

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
  const [headerAction, setHeaderAction] = useState<HeaderAction | null>(null);
  const location = useLocation();

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
                {headerAction && <Button style={{ maxHeight: '50px' }} onClick={headerAction.onClick}>{headerAction.label}</Button>}
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
