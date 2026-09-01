import type { Dispatch, ReactNode, SetStateAction } from "react";

export type WebHookProps = {
  id: string;
  clientApplicationId: string;
  url: string;
  active: boolean;
  eventCategories: string[]
}

export type WebHookResponse = {
  content: WebHookProps[],
  page: number,
  size: number,
  totalPages: number,
  totalElements: number
}

export type ModalEditWebHookProps = {
  isOpen: boolean;
  webHook: WebHookProps | null;
  applicationId: string;
  onClose: () => void;
}

export type ModalWebHookEventsProps = {
  isOpen: boolean;
  webHook: WebHookProps | null;
  onClose: () => void;
}

export type WebHookProviderProps = {
  children: ReactNode;
}

export type WebHookContextProps = {
  webHooks: WebHookProps[];
  applicationId: string;
  page: number;
  totalPages: number;
  header: string[];
  setWebHooks: Dispatch<SetStateAction<WebHookProps[]>>;
  setPage: Dispatch<SetStateAction<number>>;
  setApplicationId: Dispatch<SetStateAction<string>>;
  handleNextPage: () => void;
  handleBackPage: () => void;
}

