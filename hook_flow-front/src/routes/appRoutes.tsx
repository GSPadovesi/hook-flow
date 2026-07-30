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
            element: <Dashboard />
          },
          {
            path: appRoutes.Application,
            element: <h1>Tela de aplicação</h1>
          },
          {
            path: appRoutes.Webhook,
            element: <h1>Tela de webhooks</h1>
          },
          {
            path: appRoutes.Event,
            element: <h1>Tela de eventos</h1>
          },
          {
            path: appRoutes.Send,
            element: <h1>Tela de enviados</h1>
          },
          {
            path: appRoutes.Admin,
            element: <h1>Tela de admin</h1>
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
