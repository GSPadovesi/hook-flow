import type { ReactNode } from 'react'
import * as S from './modal.styles'

type ModalProps = {
  isOpen: boolean
  children: ReactNode
  ariaLabel: string
  onClose?: () => void
}

export const Modal = ({ isOpen, children, ariaLabel, onClose }: ModalProps) => {
  if (!isOpen) {
    return null
  }

  return (
    <S.Overlay onClick={onClose}>
      <S.Content
        role="dialog"
        aria-label={ariaLabel}
        aria-modal="true"
        onClick={(event) => event.stopPropagation()}
      >
        {children}
      </S.Content>
    </S.Overlay>
  )
}
