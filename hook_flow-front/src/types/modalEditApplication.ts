import type { ClientApplicationProps } from './clientApplication'

export type ModalEditApplicationProps = {
  isOpen: boolean
  application: ClientApplicationProps | null
  onClose: () => void
}
