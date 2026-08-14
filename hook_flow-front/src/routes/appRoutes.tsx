import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppLayout } from '../components'
import { Dashboard, Applications, Login } from '../pages'
import { GuestRoute, ProtectedRoute } from './routeGuards'
import { appRoutes } from './routePaths'
export { appRoutes } from './routePaths'

export const Teste = () => {
  return <h1>Ola, mundo</h1>
}

export const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: appRoutes.Dashboard,
            element: <Dashboard />
          },
          {
            path: appRoutes.Application,
            element: <Applications />
          },
          {
            path: appRoutes.Webhook,
            element: <Teste />
          },
          {
            path: appRoutes.Event,
            element: <Teste />
          },
          {
            path: appRoutes.Send,
            element: <Teste />
          },
          {
            path: appRoutes.Admin,
            element: <Teste />
          }
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
