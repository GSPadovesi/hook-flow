import type { AnchorHTMLAttributes, PropsWithChildren } from "react"

export type ButtonVariant = 'primary' | 'secondary'

export interface ButtonProps
  extends PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> {
  variant?: ButtonVariant
}

export type ButtonStyleProps = {
  $variant: 'primary' | 'secondary'
}