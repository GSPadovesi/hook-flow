import type { Dispatch, ReactNode, SetStateAction } from "react";

export type KeysProps = {
  id: string,
  active: boolean
}

export type ClientApplicationProps = {
  id: string;
  name: string;
  description: string;
  active: boolean;
  ownerId: string;
  keys: KeysProps[];
}

export type ClientApplicationApiResponse = {
  content: ClientApplicationProps[],
  page: number,
  size: number,
  totalPages: number,
  totalElements: number
}

export type ClientApplicationContextProps = {
  applications: ClientApplicationProps[];
  page: number;
  totalPages: number;
  header: string[];
  setApplications: Dispatch<SetStateAction<ClientApplicationProps[]>>;
  setPage: Dispatch<SetStateAction<number>>;
  handleNextPage: () => void;
  handleBackPage: () => void;
}

export type ClientApplicationProviderProps = {
  children: ReactNode;
}
