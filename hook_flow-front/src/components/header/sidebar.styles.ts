import styled, { css } from 'styled-components'

type OpenProps = {
  $isOpen: boolean
}

export const Sidebar = styled.div<OpenProps>`
  width: 350px;
  min-height: 100dvh;
  z-index: 100;
  background-color: #101122;
  color: #ffffff;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 32px 16px;
  border-right: 3px solid #9d2dfd;

  @media (max-width: 1023px) {
    position: fixed;
    inset: 0 auto 0 0;
    width: min(82vw, 350px);
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 1001;
    

    ${({ $isOpen }) =>
      $isOpen &&
      css`
        transform: translateX(0);
      `}
  }
`

export const Backdrop = styled.button`
  display: none;

  @media (max-width: 1023px) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 1000;
    border: 0;
    padding: 0;
    background: rgba(0, 0, 0, 0.35);
  }
`

export const Header = styled.div`
  width: 100%;
  min-height: 30px;
  display: flex;
  align-items: center;
  gap: 4px;
`

export const List = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  flex: 1;
  list-style: none;
  margin-top: 20px;
`

export const Item = styled.li`
  width: 100%;
`