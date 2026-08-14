import { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { ChevronDown, ChevronUp, LogOut, Settings, User } from 'lucide-react'
import { UserContext } from '@/context'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks'
import hookzinho from '../../assets/hookzinho.png'
import * as S from './userDropdown.styles'
import { Typography } from '../typography'

export const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { onLogout } = useAuth();
  const auth = useContext(UserContext);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleLogout = useCallback(async () => {
    await onLogout();
    navigate("/login")
  }, [navigate])

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.Trigger
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        $isOpen={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        <S.Avatar aria-hidden="true" src={hookzinho} alt='Robo Hookzinho' />
        <Typography fontSize='12px'>{auth?.user?.username}</Typography>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </S.Trigger>
      <S.Menu role="menu" $isOpen={isOpen}>
        <S.MenuItem type="button" role="menuitem">
          <User size={18} />
          Perfil
        </S.MenuItem>
        <S.Separator />
        <S.MenuItem type="button" role="menuitem" $danger onClick={() => handleLogout}>
          <LogOut size={18} />
          Sair
        </S.MenuItem>
      </S.Menu>
    </S.Wrapper>
  )
}

UserDropdown.displayName = 'UserDropdown'
