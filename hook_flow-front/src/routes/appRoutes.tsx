import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppLayout } from '../components'
import { Dashboard, Login } from '../pages'
import { GuestRoute, ProtectedRoute } from './routeGuards'
import { appRoutes } from './routePaths'
export { appRoutes } from './routePaths'

export const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: appRoutes.Dashboard,
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
  {
    element: <GuestRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: appRoutes.Login,
            element: <Login />,
          }
        ]
      },
    ],
  },
  {
    path: '/',
    element: <Navigate to={appRoutes.Login} replace />,
  },
  {
    path: '*',
    element: <Navigate to={appRoutes.Login} replace />,
  },
])
