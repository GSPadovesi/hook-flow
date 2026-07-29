import type { ParagraphProps } from '../../types'
import * as S from './typography.styles'

export const Typography = ({
  color = '#191919',
  fontSize = '16px',
  fontWeight = 400,
  children,
  ...props
}: ParagraphProps) => {
  return (
    <S.Paragraph
      $color={color}
      $fontSize={fontSize}
      $fontWeight={fontWeight}
      {...props}
    >
      {children}
    </S.Paragraph>
  )
}

Typography.displayName = 'Typography'