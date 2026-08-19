import type { ReactNode } from 'react'

export type ListModalProps = {
  title: string
  children: ReactNode
  icon?: ReactNode
  onClose: () => void
  actions?: ReactNode
}
