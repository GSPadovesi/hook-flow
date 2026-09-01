import { Button, Input, Modal } from '@/components';
import type { ModalEditWebHookProps } from '@/types';
import { Link, Pencil } from 'lucide-react';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ListModal } from '../../applications/listModal/listModal';
import * as S from './modalEditWebHook.styles';
import { createWebHook } from '@/service';
import { WebHookContext } from '@/context';

export const ModalEditWebHook = ({ isOpen, webHook, applicationId, onClose }: ModalEditWebHookProps) => {
  const [url, setUrl] = useState(webHook?.url ?? '');
  const [loading, setLoading] = useState<boolean>(false);
  const webhooks = useContext(WebHookContext);
  const isEditing = Boolean(webHook);
  const hasRequiredValues = Boolean(url.trim()) && Boolean(applicationId.trim());
  const hasChanged = url.trim() !== (webHook?.url ?? '').trim();
  const isSubmitDisabled = isEditing ? !hasRequiredValues || !hasChanged : !hasRequiredValues;

  const handleCreateWebHooks = useCallback(async () => {
    if (!url.trim() || !applicationId.trim() || loading) return;

    try {
      setLoading(true);
      const data = await createWebHook(applicationId, url);
      webhooks?.setWebHooks((oldWebhooks) => {
        return [...oldWebhooks, data]
      });

      onClose()
    } catch (error) {
      console.error("Erro: ", error);
    } finally {
      setLoading(false);
    }
  }, [applicationId, url])

  useEffect(() => {
    setUrl(webHook?.url ?? '');
  }, [webHook, isOpen]);

  return <Modal isOpen={isOpen} onClose={onClose} ariaLabel='Modal de edicao do webhook' >
    <ListModal
      title={isEditing ? 'Editar WebHook' : 'Novo WebHook'}
      subtitle={isEditing ? 'Atualize as informacoes do WebHook.' : 'Cadastre uma URL para receber eventos desta aplicacao.'}
      onClose={onClose}
      actions={<Button type="button" disabled={isSubmitDisabled} onClick={handleCreateWebHooks}>Salvar</Button>}
      icon={isEditing ? <Pencil color="#9d2dfd" /> : <Link color="#9d2dfd" />}
    >
      <S.EditForm>
        <Input
          label="URL do WebHook"
          name="url"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
          placeholder="Ex: https://minha-api.com/webhooks"
          required
          helperText="Informe o endpoint que recebera as notificacoes."
        />
      </S.EditForm>
    </ListModal>
  </Modal>
}
