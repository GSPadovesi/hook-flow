import type { InputProps } from '../../types'
import * as S from './input.styles'

export const Input = ({ label, helperText, id, ...props }: InputProps) => {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <S.Label htmlFor={inputId}>
      {label}
      <S.Input id={inputId} {...props} />
      {helperText && <S.HelperText>{helperText}</S.HelperText>}
    </S.Label>
  )
}

Input.displayName = 'Input'
