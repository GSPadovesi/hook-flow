import type { ButtonHTMLAttributes, Dispatch, SetStateAction } from 'react'

export type HeaderHamburguerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
