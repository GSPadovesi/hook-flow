import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import { GlobalStyle } from './styles/global'
import { setupInterceptors } from './config'
import App from './App.tsx'
import 'react-toastify/dist/ReactToastify.css'

setupInterceptors();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <ToastContainer />
    <App />
  </StrictMode>,
)
