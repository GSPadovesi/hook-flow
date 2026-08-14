import { UserContext } from "@/context"
import { validateSession } from "@/service"
import type { SessionStatus, User, UserProviderProps } from "@/types"
import { useCallback, useEffect, useState } from "react"

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [status, setStatus] = useState<SessionStatus | String>('loading')

  const createSession = useCallback(async () => {
    if (status === "authenticated") return;

    try {
      const data = await validateSession();
      setUser(data);
      setStatus('authenticated');
    } catch (error) {
      clearSession();
    }
  }, []);

  const clearSession = useCallback(() => {
    setUser(null);
    setStatus('unauthenticated')
  }, [])

  useEffect(() => {
    createSession()
  }, [])

  return (
    <UserContext.Provider value={{ user, status, createSession, clearSession }}>
      {children}
    </UserContext.Provider>
  )
}
