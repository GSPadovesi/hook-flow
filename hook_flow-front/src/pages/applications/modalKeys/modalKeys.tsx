import { ListModal } from '../listModal/listModal';
import { Hash, KeyRound, Shield, Trash2 } from 'lucide-react';
import { Title } from '@/components/title';
import { Typography } from '@/components/typography';
import { Button } from '@/components/button';
import type { KeysProps, ModalKey, ModalKeysProps } from '@/types';
import * as S from './modalKeys.styles'
import { useCallback, useContext, useState } from 'react';
import { createApiKey, removeApiKey } from '@/service/apiKey';
import { appToast, Modal } from '@/components';
import { ClientApplicationContext } from '@/context';

const getKeyActive = (key: KeysProps) => {
  const modalKey = key as ModalKey

  return modalKey.active ?? modalKey.status ?? false
}

export const ModalKeys = ({ isOpen, keys, applicationId, onClose }: ModalKeysProps) => {
  const [generatedApiKey, setGeneratedApiKey] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const applicationsProvider = useContext(ClientApplicationContext);

  const handleClose = useCallback(() => {
    setGeneratedApiKey(null)
    onClose()
  }, [onClose])

  const handleGenerateApiKey = useCallback(async () => {
    if (!applicationId || keys.length >= 3 || isGenerating) return

    try {
      setIsGenerating(true)
      const data = await createApiKey(applicationId)
      applicationsProvider?.setApplications((oldApplications) => {
        return oldApplications.map((application) => {
          if (application.id === applicationId) {
            return {
              ...application,
              keys: [{ id: data.apiKey.id, active: data.apiKey.active }, ...application.keys]
            };
          }

          return application;
        });
      });
      setGeneratedApiKey(String(data.key))
    } catch {
      setGeneratedApiKey(null)
    } finally {
      setIsGenerating(false)
    }
  }, [applicationId, isGenerating, keys.length]);

  const handleRemoveApiKey = useCallback(async (id: string) => {
    try {
      const result = await appToast.promise(() => removeApiKey(id), {
        confirm: 'Deseja apagar esta chave?',
        pending: 'Apagando chave...',
        success: 'Chave apagada com sucesso.',
        error: 'Erro ao apagar chave.',
      });

      if (result === false) return;

      applicationsProvider?.setApplications((oldApplications) => {
        return oldApplications.map((application) => {
          if (application.id === applicationId) {
            return {
              ...application,
              keys: application.keys.filter(key => key.id !== id)
            };
          }

          return application;
        });
      });

      onClose();
    } catch (err) {
      console.error("Error: ", err)
    }
  }, [applicationId, applicationsProvider])

  return <Modal isOpen={isOpen} onClose={handleClose} ariaLabel='Modal de chaves da aplicacao' >
    <ListModal title="API Keys" onClose={handleClose} icon={<KeyRound color="#9d2dfd" />}>
      <>
        {generatedApiKey ?
          <S.GeneratedKeyContent>
            <Title type="h3">Chave de API gerada</Title>
            <Typography color="#4b3b5f">Esta chave será exibida apenas uma vez. Guarde-a em um local seguro.</Typography>
            <S.GeneratedKeyValue>{generatedApiKey}</S.GeneratedKeyValue>
            <Button onClick={handleClose}>Fechar</Button>
          </S.GeneratedKeyContent>
          :
          <>
            {<S.KeyList>
              <S.KeyHeader>
                <Title type="h3">Suas chaves de API</Title>
                <div style={{ display: 'flex', gap: '12px', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                  <Typography>{`${keys.length} / 3 chaves utilizadas`}</Typography>
                  <Button
                    style={{ maxHeight: '40px', padding: '16px' }}
                    disabled={keys.length >= 3 || isGenerating}
                    onClick={handleGenerateApiKey}
                  >
                    {isGenerating ? 'Gerando...' : '+ Nova chave'}
                  </Button>
                </div>
              </S.KeyHeader>
              <Typography>Você pode criar até 3 chaves da API. Cada chave será exibida apenas 1 vez.</Typography>
              {keys.length ?
                <S.KeyContent>
                  <S.KeyTableHeader>
                    <Typography>Id da chave</Typography>
                    <Typography>Status</Typography>
                  </S.KeyTableHeader>
                  {keys.map((key) => (
                    <S.KeyRow key={key.id}>
                      <S.KeyInfo>
                        <S.KeyIcon aria-hidden="true">
                          <Hash size={16} />
                        </S.KeyIcon>
                        <S.KeyText>
                          <Typography fontWeight={700}>{key.id}</Typography>
                        </S.KeyText>
                      </S.KeyInfo>
                      <S.KeyStatus $active={getKeyActive(key)}>
                        {getKeyActive(key) ? 'Ativa' : 'Inativa'}
                      </S.KeyStatus>
                      <S.KeyActionsButton
                        type="button"
                        aria-label={`Remover chave ${key.id}`}
                        onClick={() => handleRemoveApiKey(key.id)}
                      >
                        <Trash2 size={18} />
                      </S.KeyActionsButton>
                    </S.KeyRow>
                  ))}
                </S.KeyContent> :
                <Title type="h3">Nenhuma chave vinculada a essa aplicação foi encontrada</Title>}
            </S.KeyList>}
            <S.SecurityAlert>
              <S.SecurityIcon>
                <Shield size={22} />
              </S.SecurityIcon>
              <S.SecurityText>
                <Typography color="#9d2dfd" fontWeight={700}>Segurança em primeiro lugar</Typography>
                <Typography color="#4b3b5f" fontSize="14px">
                  Sua chave de API é exibida apenas no momento da criação.
                </Typography>
                <Typography color="#4b3b5f" fontSize="14px">
                  Guarde-a em um local seguro.
                </Typography>
                <Typography color="#4b3b5f" fontSize="14px">
                  Para apagar totalmente uma API key ou ativa-la novamente, entre em contato com o administrador.
                </Typography>
              </S.SecurityText>
            </S.SecurityAlert>
          </>}
      </>
    </ListModal>
  </Modal>
}
