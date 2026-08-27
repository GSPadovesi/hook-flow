import type { ModalEditApplicationProps } from '@/types';
import { ListModal } from '../listModal/listModal';
import { AppWindow, Pencil } from 'lucide-react';
import { Button, Input, Modal } from '@/components';
import { useCallback, useContext, useEffect, useState } from 'react';
import * as S from './modalEditApplication.styles'
import { ClientApplicationContext } from '@/context';
import { createClientApplication } from '@/service';

export const ModalEditApplication = ({ isOpen, application, onClose }: ModalEditApplicationProps) => {
  const [name, setName] = useState(application?.name ?? '');
  const [description, setDescription] = useState(application?.description ?? '');
  const [loading, setLoading] = useState(false);
  const applications = useContext(ClientApplicationContext);
  const isEditing = Boolean(application);
  const hasRequiredValues = Boolean(name.trim()) && Boolean(description.trim());
  const hasChanged = name.trim() !== (application?.name ?? '').trim() || description.trim() !== (application?.description ?? '').trim();
  const isSubmitDisabled = isEditing ? !hasRequiredValues || !hasChanged : !hasRequiredValues || loading;

  const handleCreataClientApplication = useCallback(async () => {
    if (!name.trim() || !description.trim() || loading) return;

    try {
      setLoading(true);
      const data = await createClientApplication(name, description);
      applications?.setApplications((oldApplications) => {
        return [...oldApplications, data]
      });

      onClose()
    } catch (error) {
      console.error("Erro: ", error);
    } finally {
      setLoading(false);
    }


  }, [name, description])

  useEffect(() => {
    setName(application?.name ?? '');
    setDescription(application?.description ?? '');
  }, [application, isOpen]);

  return <Modal isOpen={isOpen} onClose={onClose} ariaLabel='Modal de edicao da aplicacao' >
    <ListModal
      title={isEditing ? 'Editar aplicacao' : 'Nova aplicacao'}
      subtitle={isEditing ? 'Atualize as informacoes da aplicacao.' : 'Cadastre uma aplicacao para comecar a enviar eventos.'}
      onClose={onClose}
      actions={<Button type="button" disabled={isSubmitDisabled} onClick={handleCreataClientApplication}>{loading ? "criando..." : isEditing ? 'Salvar' : 'Criar aplicacao'}</Button>}
      icon={isEditing ? <Pencil color="#9d2dfd" /> : <AppWindow color="#9d2dfd" />}
    >
      <S.EditForm>
        <Input
          label="Nome da aplicacao"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Ex: Minha Loja"
          required
          helperText="Escolha um nome para identificar sua aplicacao."
        />
        <S.Field>
          <span>Descricao</span>
          <S.Textarea
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Ex: Aplicacao responsavel pelos eventos da minha loja."
            rows={4}
          />
          <S.HelperText>Descreva brevemente o proposito desta aplicacao.</S.HelperText>
        </S.Field>
      </S.EditForm>
    </ListModal>
  </Modal>
}
