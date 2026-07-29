import type { ButtonHTMLAttributes, Dispatch, SetStateAction } from 'react'
import * as S from './headerHamburguer.styles'

type HeaderHamburguerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const HeaderHamburguer = ({ isOpen, setIsOpen, ...props }: HeaderHamburguerProps) => {
  return (
    <S.HeaderHamburguer
      type="button"
      $isOpen={isOpen}
      aria-expanded={isOpen}
      aria-controls="site-navigation"
      onClick={() => setIsOpen(!isOpen)}
      {...props}
    >
      <S.Hamburger $isOpen={isOpen} aria-hidden="true" />
    </S.HeaderHamburguer>
  )
}

HeaderHamburguer.displayName = 'HeaderHamburguer'
