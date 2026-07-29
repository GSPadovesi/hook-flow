import styled from 'styled-components'
import type { TitleStyleProps } from '../../types'

export const Title = styled.h2<TitleStyleProps>`
  margin: 0;
  color: ${({ $color }) => $color};
  font-family: "Inter", sans-serif;
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  line-height: 1.2;

  @media (max-width: 1023px) {
    font-size: ${({ $fontSize }) => `calc(${$fontSize} - 4px)`};
  }
`
