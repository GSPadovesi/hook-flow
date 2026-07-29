import type { TitleProps } from '../../types'
import * as S from './title.styles'

const defaultFontSize = {
  h1: '48px',
  h2: '36px',
  h3: '24px',
}

export const Title = ({
  type = 'h2',
  color = '#555555',
  fontSize,
  fontWeight = 700,
  children,
  ...props
}: TitleProps) => {
  return (
    <S.Title
      as={type}
      $color={color}
      $fontSize={fontSize ?? defaultFontSize[type]}
      $fontWeight={fontWeight}
      {...props}
    >
      {children}
    </S.Title>
  )
}

Title.displayName = 'Title'