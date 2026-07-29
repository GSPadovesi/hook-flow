import styled from 'styled-components'
import type { ParagraphStyleProps } from '../../types'

export const Paragraph = styled.p<ParagraphStyleProps>`
  margin: 0;
  color: ${({ $color }) => $color};
  font-family: "Inter", sans-serif;
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  line-height: 1.65;

  @media(max-width: 1023px){
    font-size: ${({ $fontSize }) => `calc(${$fontSize} - 2px)`};
  }
`
