import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  height: 100dvh;
  display: flex;
  overflow: hidden;
`

export const Content = styled.section`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  min-width: 0;
  height: 100dvh;
  max-width: 1240px;
  margin: 0 auto;
  overflow: hidden;
  padding: 32px 20px;
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const HeaderContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`

export const PageContent = styled.div`
  flex: 1;
  min-height: 0;
  width: 100%;
  overflow: auto;
`
