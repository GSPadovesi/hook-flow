import { Outlet, useLocation } from 'react-router-dom'
import { Sidebar } from '../'
import * as S from './appLayout.styles'

export function AppLayout() {
  const location = useLocation();

  return (
    <>
      <S.Main aria-label="Main">
        {location.pathname !== "/login" && <Sidebar />}
        <Outlet />
      </S.Main>
    </>
  )
}

AppLayout.displayName = 'AppLayout'
