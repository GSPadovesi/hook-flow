import styled from 'styled-components'

export const Page = () => {
  return (
    <LoginPage>
      <Brand href="#">Hook Flow</Brand>
    </LoginPage>
  )
}

const LoginPage = styled.main`
  align-items: center;
  background: #ffffff;
  color: #171717;
  display: flex;
  justify-content: center;
  min-height: 100dvh;
  padding: 2rem;
`

const Brand = styled.a`
  color: inherit;
  font-size: 1.25rem;
  font-weight: 600;
  text-decoration: none;
`
