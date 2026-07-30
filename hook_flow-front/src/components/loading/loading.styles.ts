import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const Loading = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100dvh;
`

export const Spinner = styled.span`
  width: 24px;
  height: 24px;
  border: 3px solid #e5e7eb;
  border-top-color: #9d2dfd;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`
