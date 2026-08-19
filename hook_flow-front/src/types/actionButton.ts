import type { ClientApplicationProps } from './clientApplication'

export type ActionButtonProps = {
  application: ClientApplicationProps
  onEdit?: (application: ClientApplicationProps) => void
  onDelete?: (application: ClientApplicationProps) => void
}
