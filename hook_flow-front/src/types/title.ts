import type { HTMLAttributes, PropsWithChildren } from 'react'

export type TitleTag = 'h1' | 'h2' | 'h3'

export interface TitleProps
  extends PropsWithChildren<Omit<HTMLAttributes<HTMLHeadingElement>, 'color'>> {
  type?: TitleTag
  color?: string
  fontSize?: string
  fontWeight?: number | string
}

export interface TitleStyleProps {
  $color: string
  $fontSize: string
  $fontWeight: number | string
}
