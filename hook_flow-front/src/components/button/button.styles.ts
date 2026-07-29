import styled, { css } from 'styled-components'
import type { ButtonStyleProps } from '../../types'

const variants = {
  primary: css`
    color: #fff;
    background: #9d2dfd;

    &:hover {
      color: #fff;
      background: #8b22e8;
    }
  `,
  secondary: css`
    color: #fff;
    background: #101122;

    &:hover {
      color: #fff;
      background: #1d1f3a;
    }
  `,
}

export const Button = styled.a<ButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding: 20px 40px;
  border-radius: 12px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  line-height: 1.2;
  text-decoration: none;
  text-transform: capitalize;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 26px rgba(7, 17, 45, 0.24);
    filter: brightness(1.08);
  }

  ${({ $variant }) => variants[$variant]}
`
