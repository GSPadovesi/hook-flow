import type { ReactNode } from "react"

export type SessionStatus = 'loading' | 'authenticated' | 'unauthenticated'

export type UserProviderProps = {
  children: ReactNode;
}

export type User = {
  username: string;
  name: string;
  email: string;
  role: string;
}

export type UserContextProps = {
  user: User | null;
  status: SessionStatus | String;
  createSession: () => void;
  clearSession: () => void;
}
