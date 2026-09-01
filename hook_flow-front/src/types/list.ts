import type { ReactNode } from 'react'

export type ListRow = {
  id: string
  cells: ReactNode[]
}

export type ListProps = {
  headers?: string[]
  rows?: ListRow[]
  emptyMessage?: ReactNode
}
