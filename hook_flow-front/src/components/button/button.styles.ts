import styled, { css } from 'styled-components'
import type { ButtonStyleProps } from '../../types'

const variants = {
  primary: css`
    color: #fff;
    background: #9d2dfd;

    &:not(:disabled):hover {
      color: #fff;
      background: #8b22e8;
    }
  `,
  secondary: css`
    color: #fff;
    background: #101122;

    &:not(:disabled):hover {
      color: #fff;
      background: #1d1f3a;
    }
  `,
}

const buttonStyles = css<ButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 20px 40px;
  border: 0;
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.2;
  text-decoration: none;
  text-transform: capitalize;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  &:not(:disabled):hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 26px rgba(7, 17, 45, 0.24);
    filter: brightness(1.08);
  }

  ${({ $variant }) => variants[$variant]}

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }

  &[aria-disabled='true'] {
    cursor: not-allowed;
    opacity: 0.55;
    pointer-events: none;
  }
`

export const Button = styled.button<ButtonStyleProps>`
  ${buttonStyles}
`

export const Anchor = styled.a<ButtonStyleProps>`
  ${buttonStyles}
`
