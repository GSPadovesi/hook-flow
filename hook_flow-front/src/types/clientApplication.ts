import type { Dispatch, ReactNode, SetStateAction } from "react";

export type KeysProps = {
  id: string,
  active: boolean
}

export type ClientApplicationProps = {
  id: string;
  name: string;
  description: string;
  status: boolean;
  ownerId: string;
  keys: KeysProps[];
}

export type ClientApplicationApiResponse = {
  id: string;
  name: string;
  description: string;
  active: boolean;
  ownerId: string;
  keys: KeysProps[];
}

export type ClientApplicationContextProps = {
  applications: ClientApplicationProps[];
  setApplications: Dispatch<SetStateAction<ClientApplicationProps[]>>;
  header: string[];
}

export type ClientApplicationProviderProps = {
  children: ReactNode;
}
