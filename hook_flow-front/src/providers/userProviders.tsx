import { UserContext } from "@/context"
import { validateSession } from "@/service"
import type { SessionStatus, User, UserProviderProps } from "@/types"
import { useCallback, useEffect, useState } from "react"

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [status, setStatus] = useState<SessionStatus>('loading')

  const refreshSession = useCallback(async () => {
    setStatus('loading')

    try {
      const data = await validateSession();
      setUser(data)
      setStatus('authenticated')
    } catch (error) {
      setUser(null)
      setStatus('unauthenticated')
    }
  }, [])

  useEffect(() => { refreshSession() }, [refreshSession])

  return (
    <UserContext.Provider value={{ user, status, refreshSession }}>
      {children}
    </UserContext.Provider>
  )
}
