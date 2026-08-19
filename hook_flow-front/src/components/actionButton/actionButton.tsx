import type { ActionButtonProps, ClientApplicationProps } from '@/types'
import { MoreVertical, Pencil, Trash2 } from 'lucide-react'
import { useState } from 'react'
import * as S from './actionButton.styles'

export const ActionButton = ({ application, onEdit, onDelete }: ActionButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleActionClick = (action?: (application: ClientApplicationProps) => void) => {
    action?.(application)
    setIsOpen(false)
  }

  return (
    <S.Actions>
      <S.ActionsTrigger
        type="button"
        aria-label={`Abrir acoes de ${application.name}`}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((currentValue) => !currentValue)}
      >
        <MoreVertical size={18} aria-hidden="true" />
      </S.ActionsTrigger>
      {isOpen && (
        <S.ActionsMenu>
          <S.ActionsMenuItem
            type="button"
            onClick={() => handleActionClick(onEdit)}
          >
            <Pencil size={16} aria-hidden="true" />
            Editar
          </S.ActionsMenuItem>
          <S.ActionsMenuItem
            type="button"
            $danger
            onClick={() => handleActionClick(onDelete)}
          >
            <Trash2 size={16} aria-hidden="true" />
            Apagar
          </S.ActionsMenuItem>
        </S.ActionsMenu>
      )}
    </S.Actions>
  )
}
