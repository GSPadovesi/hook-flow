import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { isAuthenticated } from './auth'
import { appRoutes } from './routePaths'

export function ProtectedRoute() {
  const location = useLocation()

  if (!isAuthenticated()) {
    return <Navigate to={appRoutes.Login} replace state={{ from: location }} />
  }

  return <Outlet />
}

export function GuestRoute() {
  if (isAuthenticated()) {
    return <Navigate to={appRoutes.Dashboard} replace />
  }

  return <Outlet />
}
