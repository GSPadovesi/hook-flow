import type { ClientApplicationProps } from './clientApplication'

export type ListProps = {
  headers?: string[]
  applications?: ClientApplicationProps[]
  onEdit?: (application: ClientApplicationProps) => void
  onDelete?: (application: ClientApplicationProps) => void
}
