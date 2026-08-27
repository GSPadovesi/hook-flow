import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyle } from './styles/global'
import { setupInterceptors } from './config'
import App from './App.tsx'
import { AppToast } from './components'

setupInterceptors();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <AppToast />
    <App />
  </StrictMode>,
)
