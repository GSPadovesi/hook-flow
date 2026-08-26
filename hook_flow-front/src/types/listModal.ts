import type { ReactNode } from 'react'

export type ListModalProps = {
  title: string
  subtitle?: string
  children: ReactNode
  icon?: ReactNode
  onClose: () => void
  actions?: ReactNode
}
