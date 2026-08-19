import { X } from 'lucide-react';
import { Title } from '../../title';
import type { ListModalProps } from '@/types';
import * as S from './listModal.styles';

export const ListModal = ({ title, children, icon, onClose, actions }: ListModalProps) => {
  return <S.ModalContent>
    <S.ModalHeader>
      <S.ModalIcon>
        {icon}
      </S.ModalIcon>
      <S.ModalTitle>
        <Title type="h3">{title}</Title>
      </S.ModalTitle>
      <S.ModalCloseButton type="button" onClick={onClose} aria-label="Fechar modal">
        <X size={18} aria-hidden="true" />
      </S.ModalCloseButton>
    </S.ModalHeader>
    <S.ModalBody>
      {children}
    </S.ModalBody>
    <S.ModalActions>
      <S.ModalButton type="button" onClick={onClose}>Cancelar</S.ModalButton>
      {actions}
    </S.ModalActions>
  </S.ModalContent>
}
