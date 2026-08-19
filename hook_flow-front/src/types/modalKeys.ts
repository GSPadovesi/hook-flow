import type { KeysProps } from './clientApplication'

export type ModalKeysProps = {
  isOpen: boolean
  keys: KeysProps[]
  applicationId: string
  onClose: () => void
  onRemoveKey?: (keyId: string) => void
}

export type ModalKey = KeysProps & {
  createdAt?: string
  created_at?: string
  status?: boolean
}
