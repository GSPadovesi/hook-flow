import type { SelectHTMLAttributes } from 'react'

export type SelectOption = {
  label: string
  value: string | number
  disabled?: boolean
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  helperText?: string
  placeholder?: string
  options: SelectOption[]
}
