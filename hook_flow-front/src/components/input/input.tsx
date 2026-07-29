import type { InputProps } from '../../types'
import * as S from './input.styles'

export const Input = ({ label, id, ...props }: InputProps) => {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-')

  return (
    <S.Label htmlFor={inputId}>
      {label}
      <S.Input id={inputId} {...props} />
    </S.Label>
  )
}

Input.displayName = 'Input'
