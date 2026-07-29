import styled, { css } from 'styled-components'

type HeaderHamburguerStyleProps = {
  $isOpen: boolean
}

export const HeaderHamburguer = styled.button<HeaderHamburguerStyleProps>`
  width: 32px;
  height: 24px;
  border: 0;
  padding: 0;
  display: none;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;
  color: currentColor;
  cursor: pointer;

  @media (max-width: 1023px) {
    display: flex;
    position: absolute;
    top: 24px;
    right: -56px;
    color: #101122;
    z-index: 1002;

    ${({ $isOpen }) =>
      $isOpen &&
      css`
        right: 24px;
        color: #ffffff;
      `}
  }

  &::before,
  &::after {
    content: '';
    width: 100%;
    border-bottom: 3px solid currentColor;
    border-radius: 2px;
    transition: transform 0.3s ease;
  }

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      &::before {
        transform: rotate(-45deg) translate(-7px, 7px);
      }

      &::after {
        transform: rotate(45deg) translate(-8px, -8px);
      }
    `}
`

export const Hamburger = styled.span<HeaderHamburguerStyleProps>`
  width: 100%;
  border-bottom: 3px solid currentColor;
  border-radius: 2px;
  transition: border-color 0.3s ease;

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      border-color: transparent;
    `}
`
