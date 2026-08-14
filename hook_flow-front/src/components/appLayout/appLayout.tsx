import { Outlet, useLocation } from 'react-router-dom'
import { Sidebar, Title, UserDropdown } from '../'
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
              </S.HeaderContent>
            </S.Header>
          )}
          <S.PageContent>
            <Outlet />
          </S.PageContent>
        </S.Content>
      </S.Main>
    </>
  )
}

AppLayout.displayName = 'AppLayout'
