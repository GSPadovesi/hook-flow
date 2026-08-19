import type { HeaderHamburguerProps } from '@/types'
import * as S from './headerHamburguer.styles'

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
