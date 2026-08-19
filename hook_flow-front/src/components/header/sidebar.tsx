import { useCallback, useEffect, useState } from 'react'
import { HeaderHamburguer } from './headerHamburguer/HeaderHamburguer'
import { Title } from '../title'
import { Button } from '../button'
import { House, LayoutGrid, Webhook, TicketPercent, TicketCheck, Lock, LogOut } from 'lucide-react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks'
import * as S from './sidebar.styles'

const dados = [
  { label: "Dashboard", icon: <House />, href: "/dashboard" },
  { label: "Aplicações", icon: <LayoutGrid />, href: "/applications" },
  { label: "Webhooks", icon: <Webhook />, href: "/webhooks" },
  { label: "Eventos", icon: <TicketPercent />, href: "/events" },
  { label: "Entregas", icon: <TicketCheck />, href: "/sends" },
  { label: "Administrador", icon: <Lock />, href: "/admin" }
]

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { onLogout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const closeMenu = () => { setIsOpen(false) }

  const handleLogout = useCallback(async () => {
    await onLogout();
    navigate("/login")
  }, [navigate, onLogout]);

  const handleNavigate = useCallback((href: string) => {
    navigate(href);
  }, [navigate])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <>
      {isOpen && <S.Backdrop type="button" aria-label="Fechar menu" onClick={closeMenu} />}
      <S.Sidebar $isOpen={isOpen}>
        <HeaderHamburguer isOpen={isOpen} setIsOpen={setIsOpen} />
        <S.Header>
          <img src="/hookflowicon.png" alt="Icone Hook Flow" width={100} height={100} />
          <Title color="#fff">HookFlow</Title>
        </S.Header>
        <S.List>
          {dados.map((item, index) => {
            const isActive = location.pathname === item.href

            return (
              <S.Item key={`${item.href}-${index}`}>
                <Button
                  variant={isActive ? 'primary' : 'secondary'}
                  style={{ width: '100%' }}
                  onClick={() => handleNavigate(item.href)}
                >
                  {item.icon}
                  {item.label}
                </Button>
              </S.Item>
            )
          })}
        </S.List>
        <Button variant="secondary" onClick={handleLogout}>
          <LogOut />
          Sair
        </Button>
      </S.Sidebar>
    </>
  )
}

Sidebar.displayName = 'Sidebar'
