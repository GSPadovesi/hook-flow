import { createBrowserRouter, Navigate } from 'react-router-dom'
import { AppLayout } from '../components'
import { Applications, Dashboard, Login, Admin, Placeholder } from '../pages'
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
            element: <Applications />
          },
          {
            path: appRoutes.Webhook,
            element: <Placeholder />
          },
          {
            path: appRoutes.Event,
            element: <Placeholder />
          },
          {
            path: appRoutes.Send,
            element: <Placeholder />
          },
          {
            path: appRoutes.Admin,
            element: <Admin />
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
