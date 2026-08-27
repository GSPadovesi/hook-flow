import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'danger'

type BaseButtonProps = {
  variant?: ButtonVariant
}

export type NativeButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> &
  BaseButtonProps & {
    href?: never
  }

export type AnchorButtonProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> &
  BaseButtonProps & {
    href: string
    disabled?: boolean
  }

export type ButtonProps = NativeButtonProps | AnchorButtonProps

export type ButtonStyleProps = {
  $variant: ButtonVariant
}
