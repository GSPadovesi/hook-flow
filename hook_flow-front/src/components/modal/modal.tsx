import type { ModalProps } from '@/types'
import * as S from './modal.styles'

export const Modal = ({ isOpen, children, ariaLabel, onClose }: ModalProps) => {
  if (!isOpen) return null

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
