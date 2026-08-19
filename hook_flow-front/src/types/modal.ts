import type { ReactNode } from 'react'

export type ModalProps = {
  isOpen: boolean
  children: ReactNode
  ariaLabel: string
  onClose?: () => void
}
