import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  padding: 24px;
  background: rgba(16, 17, 34, 0.56);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  width: 880px;
  max-height: calc(100vh - 48px);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 18px 48px rgba(16, 17, 34, 0.24);
  overflow: auto;
  padding: 16px 20px;
`
