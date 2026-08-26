import type { ActionButtonItem, ActionButtonProps } from '@/types'
import { MoreVertical } from 'lucide-react'
import { useState } from 'react'
import * as S from './actionButton.styles'

export const ActionButton = <TItem,>({ item, ariaLabel, actions }: ActionButtonProps<TItem>) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleActionClick = (action: ActionButtonItem<TItem>) => {
    action.onClick?.(item)
    setIsOpen(false)
  }

  return (
    <S.Actions>
      <S.ActionsTrigger
        type="button"
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((currentValue) => !currentValue)}
      >
        <MoreVertical size={18} aria-hidden="true" />
      </S.ActionsTrigger>
      {isOpen && (
        <S.ActionsMenu>
          {actions.map((action) => (
            <S.ActionsMenuItem
              key={action.label}
              type="button"
              $danger={action.danger}
              onClick={() => handleActionClick(action)}
            >
              {action.icon}
              {action.label}
            </S.ActionsMenuItem>
          ))}
        </S.ActionsMenu>
      )}
    </S.Actions>
  )
}
