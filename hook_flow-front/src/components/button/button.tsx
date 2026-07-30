import type { AnchorButtonProps, ButtonProps, NativeButtonProps } from '../../types'
import * as S from './button.styles'

export const Button = (props: ButtonProps) => {
  const { children } = props
  const ariaLabel = props['aria-label'] ?? (typeof children === 'string' ? children : undefined)

  if ('href' in props && props.href !== undefined) {
    const { variant = 'primary', children, disabled, href, tabIndex, ...anchorProps } = props as AnchorButtonProps
    const isDisabled = Boolean(disabled)

    return (
      <S.Anchor
        $variant={variant}
        aria-disabled={isDisabled}
        aria-label={ariaLabel}
        href={isDisabled ? undefined : href}
        tabIndex={isDisabled ? -1 : tabIndex}
        {...anchorProps}
      >
        {children}
      </S.Anchor>
    )
  }

  const { variant = 'primary', children: buttonChildren, type = 'button', ...buttonProps } = props as NativeButtonProps

  return (
    <S.Button
      $variant={variant}
      aria-label={ariaLabel}
      type={type}
      {...buttonProps}
    >
      {buttonChildren}
    </S.Button>
  )
}

Button.displayName = 'Button'
