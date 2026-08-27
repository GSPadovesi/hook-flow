import { ActionButton, List } from "@/components";
import { ModalEditApplication } from "./modalEditApplication";
import { ModalKeys } from "./modalKeys";
import { ClientApplicationContext } from "@/context";
import type { AppLayoutOutletContext } from "@/components/appLayout/appLayout";
import type { ClientApplicationProps, KeysProps, ListRow } from "@/types";
import { ChevronRight, KeyRound, Pencil, Trash2 } from "lucide-react";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import * as S from './page.styles'

export const Page = () => {
  const applications = useContext(ClientApplicationContext);
  const { setHeaderAction } = useOutletContext<AppLayoutOutletContext>();
  const [isApplicationModalOpen, setIsApplicationModalOpen] = useState(false);
  const [isKeysModalOpen, setIsKeysModalOpen] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<ClientApplicationProps | null>(null);
  const [selectedKeys, setSelectedKeys] = useState<KeysProps[]>([]);
  const [applicationId, setApplicationId] = useState('');

  const openCreateModal = useCallback(() => {
    setSelectedApplication(null);
    setIsApplicationModalOpen(true);
  }, []);

  const openEditModal = useCallback((application: ClientApplicationProps) => {
    setSelectedApplication(application);
    setIsApplicationModalOpen(true);
  }, []);

  const closeApplicationModal = useCallback(() => {
    setIsApplicationModalOpen(false);
    setSelectedApplication(null);
  }, []);

  const openKeysModal = useCallback((keys: KeysProps[], id: string) => {
    setSelectedKeys(keys);
    setApplicationId(id);
    setIsKeysModalOpen(true);
  }, []);

  useEffect(() => {
    setHeaderAction({
      label: 'Adicionar aplicação',
      onClick: openCreateModal
    });

    return () => setHeaderAction(null);
  }, [openCreateModal, setHeaderAction]);

  const rows = useMemo<ListRow[]>(() => {
    return applications?.applications.map((application) => ({
      id: application.id,
      cells: [
        application.name,
        application.description,
        <S.KeysButton type="button" onClick={() => openKeysModal(application.keys, application.id)}>
          <KeyRound />
          {`${application.keys.length} / 3`}
          <ChevronRight />
        </S.KeysButton>,
        <S.StatusActions>
          {application.status ? 'Ativo' : 'Desativado'}
          <ActionButton
            item={application}
            ariaLabel={`Abrir acoes de ${application.name}`}
            actions={[
              {
                label: 'Editar',
                icon: <Pencil size={16} aria-hidden="true" />,
                onClick: openEditModal
              },
              {
                label: 'Apagar',
                icon: <Trash2 size={16} aria-hidden="true" />,
                danger: true
              }
            ]}
          />
        </S.StatusActions>
      ]
    })) ?? [];
  }, [applications?.applications, openEditModal, openKeysModal]);

  return <S.Page>
    <List
      headers={applications?.header}
      rows={rows}
    />
    <ModalKeys
      isOpen={isKeysModalOpen}
      keys={selectedKeys}
      applicationId={applicationId}
      onClose={() => setIsKeysModalOpen(false)}
    />
    <ModalEditApplication
      isOpen={isApplicationModalOpen}
      application={selectedApplication}
      onClose={closeApplicationModal}
    />
  </S.Page>
}