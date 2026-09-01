import { ClientApplicationContext, WebHookContext } from "@/context";
import type { ListRow, WebHookProps } from "@/types";
import type { AppLayoutOutletContext } from "@/types/appLayout";
import type { ChangeEventHandler } from "react";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useOutletContext } from "react-router-dom";
import * as S from './page.styles'
import { ActionButton, List } from "@/components";
import { BellRing, Pencil, Trash2 } from "lucide-react";
import { ModalEditWebHook } from "./modalEditWebHook/modalEditWebHook";
import { ModalWebHookEvents } from "./modalWebHookEvents/modalWebHookEvents";

export const Page = () => {
  const applications = useContext(ClientApplicationContext);
  const webhooks = useContext(WebHookContext);
  const { setHeaderAction } = useOutletContext<AppLayoutOutletContext>();
  const [isWebHookModalOpen, setIsWebHookModalOpen] = useState(false);
  const [isEventsModalOpen, setIsEventsModalOpen] = useState(false);
  const [selectedWebHook, setSelectedWebHook] = useState<WebHookProps | null>(null);

  const applicationOptions = useMemo(() => {
    const options = applications?.applications.map((application) => ({
      label: application.name,
      value: application.id
    })) ?? [];

    return [
      {
        label: "Todas aplicações",
        value: ""
      },
      ...options
    ]

  }, [applications?.applications])

  const handleCreateWebHook = useCallback(() => {
    if (!webhooks?.applicationId) return;

    setSelectedWebHook(null);
    setIsWebHookModalOpen(true);
  }, [webhooks?.applicationId])

  const handleEditWebHook = useCallback((webHook: WebHookProps) => {
    setSelectedWebHook(webHook);
    setIsWebHookModalOpen(true);
  }, [])

  const handleOpenEventsModal = useCallback((webHook: WebHookProps) => {
    setSelectedWebHook(webHook);
    setIsEventsModalOpen(true);
  }, [])

  const handleCloseWebHookModal = useCallback(() => {
    setSelectedWebHook(null);
    setIsWebHookModalOpen(false);
  }, [])

  const handleCloseEventsModal = useCallback(() => {
    setSelectedWebHook(null);
    setIsEventsModalOpen(false);
  }, [])

  const handleApplicationChange = useCallback<ChangeEventHandler<HTMLSelectElement>>((event) => {
    webhooks?.setPage(0);
    webhooks?.setApplicationId(event.target.value);
  }, [webhooks])

  useEffect(() => {
    setHeaderAction(
      [
        {
          type: "default",
          label: "Novo WebHook",
          disabled: !webhooks?.applicationId,
          onClick: handleCreateWebHook
        },
        {
          type: "select",
          label: "Applicações",
          value: webhooks?.applicationId ?? "",
          onChange: handleApplicationChange,
          options: applicationOptions
        }
      ]
    )

    return () => setHeaderAction(null);
  }, [applicationOptions, handleApplicationChange, handleCreateWebHook, setHeaderAction, webhooks?.applicationId])

  const rows = useMemo<ListRow[]>(() => {
    return webhooks?.webHooks.map((webHook) => ({
      id: webHook.id,
      cells: [
        webHook.url,
        applications?.applications.find(application => application.id === webHook.clientApplicationId)?.name,
        <S.StatusActions>
          {webHook.active ? 'Ativo' : 'Desativado'}
          <ActionButton
            item={webHook}
            ariaLabel={`Abrir acoes de ${webHook.id}`}
            actions={[
              {
                label: 'Editar',
                icon: <Pencil size={16} aria-hidden="true" />,
                onClick: handleEditWebHook
              },
              {
                label: 'Eventos',
                icon: <BellRing size={16} aria-hidden="true" />,
                onClick: handleOpenEventsModal
              },
              {
                label: 'Apagar',
                icon: <Trash2 size={16} aria-hidden="true" />,
                onClick: () => console.log("Excluir webhook"),
                // onClick: () => handleDeleteClientApplication(application.id),
                danger: true
              }
            ]}
          />
        </S.StatusActions>
      ]
    })) ?? [];
  }, [webhooks?.webHooks, applications?.applications, handleEditWebHook, handleOpenEventsModal]);

  return <S.Page>
    <List
      headers={webhooks?.header}
      rows={rows}
    />
    <ModalEditWebHook
      isOpen={isWebHookModalOpen}
      webHook={selectedWebHook}
      applicationId={webhooks?.applicationId ?? ''}
      onClose={handleCloseWebHookModal}
    />
    <ModalWebHookEvents
      isOpen={isEventsModalOpen}
      webHook={selectedWebHook}
      onClose={handleCloseEventsModal}
    />
  </S.Page>
}
