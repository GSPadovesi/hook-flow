import type { ChangeEventHandler, Dispatch, SetStateAction } from "react"
import type { SelectOption } from "./select"

export type BaseHeaderAction = {
  label: string
}

export type ButtonHeaderAction = BaseHeaderAction & {
  type?: 'default'
  onClick: () => void
  disabled?: boolean
}

export type SelectHeaderAction = BaseHeaderAction & {
  type: 'select'
  value?: string | number
  placeholder?: string
  options: SelectOption[]
  onChange: ChangeEventHandler<HTMLSelectElement>
}

export type HeaderAction = ButtonHeaderAction | SelectHeaderAction
export type HeaderActions = HeaderAction | HeaderAction[] | null

export type AppLayoutOutletContext = {
  setHeaderAction: Dispatch<SetStateAction<HeaderActions>>
}
