import type { ButtonProps } from '../../types'
import * as S from './button.styles'

export const Button = ({
  variant = 'primary',
  children,
  ...props
}: ButtonProps) => {
  const ariaLabel = props['aria-label'] ?? (typeof children === 'string' ? children : undefined)

  return (
    <S.Button $variant={variant} aria-label={ariaLabel} {...props}>
      {children}
    </S.Button>
  )
}

Button.displayName = 'Button'