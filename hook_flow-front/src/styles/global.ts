import { createGlobalStyle } from 'styled-components'
import '@fontsource-variable/geist'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    color: #171717;
    background: #ffffff;
    font-family: "Geist Variable", ui-sans-serif, system-ui, sans-serif;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
   
    min-height: 100dvh;
  }
`
