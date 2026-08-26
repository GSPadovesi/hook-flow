import type { ReactNode } from 'react'

export type ActionButtonItem<TItem = unknown> = {
  label: string
  icon: ReactNode
  danger?: boolean
  onClick?: (item: TItem) => void
}

export type ActionButtonProps<TItem = unknown> = {
  item: TItem
  ariaLabel: string
  actions: ActionButtonItem<TItem>[]
}
