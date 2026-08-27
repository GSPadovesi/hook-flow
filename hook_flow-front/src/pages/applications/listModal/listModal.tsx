import { X } from 'lucide-react';
import type { ListModalProps } from '@/types';
import * as S from './listModal.styles';
import { Title } from '@/components';

export const ListModal = ({ title, subtitle, children, icon, onClose, actions }: ListModalProps) => {
  return <S.ModalContent>
    <S.ModalHeader>
      <S.ModalIcon>
        {icon}
      </S.ModalIcon>
      <S.ModalTitle>
        <Title type="h3">{title}</Title>
        {subtitle && <S.ModalSubtitle>{subtitle}</S.ModalSubtitle>}
      </S.ModalTitle>
      <S.ModalCloseButton type="button" onClick={onClose} aria-label="Fechar modal">
        <X size={18} aria-hidden="true" />
      </S.ModalCloseButton>
    </S.ModalHeader>
    <S.ModalBody>
      {children}
    </S.ModalBody>
    <S.ModalActions>
      {actions}
    </S.ModalActions>
  </S.ModalContent>
}
