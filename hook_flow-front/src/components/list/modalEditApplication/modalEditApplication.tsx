import { Modal } from '../../modal';
import type { ModalEditApplicationProps } from '@/types';
import { ListModal } from '../listModal/listModal';
import { Pencil } from 'lucide-react';
import * as S from './modalEditApplication.styles'

export const ModalEditApplication = ({ isOpen, application, onClose }: ModalEditApplicationProps) => {
  return <Modal isOpen={isOpen} onClose={onClose} ariaLabel='Modal de edicao da aplicacao' >
    <ListModal
      title="Editar aplicacao"
      onClose={onClose}
      actions={<S.SubmitButton type="button">Salvar</S.SubmitButton>}
      icon={<Pencil color="#9d2dfd" />}
    >
      <S.EditForm>
        <S.Field>
          <span>Nome</span>
          <input name="name" defaultValue={application?.name ?? ''} />
        </S.Field>
        <S.Field>
          <span>Descricao</span>
          <input name="description" defaultValue={application?.description ?? ''} />
        </S.Field>
        <S.Field>
          <span>Status</span>
          <select name="status" defaultValue={application?.status ? 'active' : 'inactive'}>
            <option value="active">Ativo</option>
            <option value="inactive">Desativado</option>
          </select>
        </S.Field>
      </S.EditForm>
    </ListModal>
  </Modal>
}
