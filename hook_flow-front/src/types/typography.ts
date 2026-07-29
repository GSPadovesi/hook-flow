import type { HTMLAttributes, PropsWithChildren } from 'react'

export interface ParagraphProps
  extends PropsWithChildren<Omit<HTMLAttributes<HTMLParagraphElement>, 'color'>> {
  color?: string
  fontSize?: string
  fontWeight?: number | string
}

export interface ParagraphStyleProps {
  $color: string
  $fontSize: string
  $fontWeight: number | string
}
