import { useContext } from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { appRoutes } from './routePaths'
import { Loading } from '@/components'
import { UserContext } from '@/context'
import { ClientApplicationProvider, WebHookProvider } from '@/providers'

function useSessionStatus() {
  const auth = useContext(UserContext)
  return auth?.status ?? 'unauthenticated'
}

export function ProtectedRoute() {
  const location = useLocation()
  const status = useSessionStatus()
  if (status === 'loading') return <Loading />
  if (status === 'unauthenticated') return <Navigate to={appRoutes.Login} replace state={{ from: location }} />
  return <ClientApplicationProvider>
    <WebHookProvider>
      <Outlet />
    </WebHookProvider>
  </ClientApplicationProvider>
}

export function GuestRoute() {
  const status = useSessionStatus()
  if (status === 'loading') return <Loading />
  if (status === 'authenticated') return <Navigate to={appRoutes.Dashboard} replace />
  return <Outlet />
}
