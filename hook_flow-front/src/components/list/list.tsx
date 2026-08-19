import { useCallback, useState } from 'react';
import { ChevronRight, KeyRound } from 'lucide-react';
import { Title } from '../title';
import type { ClientApplicationProps, KeysProps, ListProps } from '@/types';
import { ActionButton } from '../actionButton';
import { ModalEditApplication } from './modalEditApplication';
import { ModalKeys } from './modalKeys';
import * as S from './list.styles'

export const List = ({ headers, applications, onEdit, onDelete }: ListProps) => {
  const [isKeysModalOpen, setIsKeysModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState<KeysProps[]>([]);
  const [selectedApplication, setSelectedApplication] = useState<ClientApplicationProps | null>(null);
  const [applicationId, setApplicationId] = useState<string>('');

  const openModalKeys = useCallback((keys: KeysProps[], applicationId: string) => {
    setSelectedKeys(keys);
    setIsKeysModalOpen(true);
    setApplicationId(applicationId);

  }, [])

  const openEditModal = useCallback((application: ClientApplicationProps) => {
    setSelectedApplication(application);
    setIsEditModalOpen(true);
    onEdit?.(application);
  }, [onEdit])

  return <S.List>
    <S.Table>
      <S.TableContainer>
        {headers?.map((item, index) => <S.TableHeader key={index}>
          <Title type="h3" color="#fff">{item}</Title>
        </S.TableHeader>
        )}
      </S.TableContainer>
      {applications?.map((item) => {
        return <S.TableContainer key={item.id}>
          <S.TableContent>{item.name}</S.TableContent>
          <S.TableContent>{item.description}</S.TableContent>
          {item.keys && <S.TableContent>
            <S.CardKey onClick={() => openModalKeys(item.keys, item.id)}>
              <KeyRound />
              {`${item.keys.length} / 3`}
              <ChevronRight />
            </S.CardKey>
          </S.TableContent>}
          <S.TableContent $hasActions>
            {item.status === true ? "Ativo" : "Desativado"}
            <ActionButton application={item} onEdit={openEditModal} onDelete={onDelete} />
          </S.TableContent>
        </S.TableContainer>
      })}
    </S.Table>
    <ModalKeys
      isOpen={isKeysModalOpen}
      keys={selectedKeys}
      applicationId={applicationId}
      onClose={() => setIsKeysModalOpen(false)}
    />
    <ModalEditApplication
      isOpen={isEditModalOpen}
      application={selectedApplication}
      onClose={() => setIsEditModalOpen(false)}
    />
  </S.List>
}
