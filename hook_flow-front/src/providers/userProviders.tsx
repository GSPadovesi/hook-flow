import { UserContext } from "@/context"
import { validateSession } from "@/service"
import type { SessionStatus, User, UserProviderProps } from "@/types"
import { useCallback, useEffect, useState } from "react"

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [status, setStatus] = useState<SessionStatus>('loading')

  const clearSession = useCallback(() => {
    setUser(null);
    setStatus('unauthenticated')
  }, [])

  const createSession = useCallback(async () => {
    if (status === "authenticated") return;

    try {
      const data = await validateSession();
      setUser(data);
      setStatus('authenticated');
    } catch {
      clearSession();
    }
  }, [clearSession, status]);

  useEffect(() => {
    let isMounted = true;

    validateSession()
      .then((data) => {
        if (!isMounted) return;
        setUser(data);
        setStatus('authenticated');
      })
      .catch(() => {
        if (!isMounted) return;
        setUser(null);
        setStatus('unauthenticated');
      });

    return () => {
      isMounted = false;
    };
  }, [])

  return (
    <UserContext.Provider value={{ user, status, createSession, clearSession }}>
      {children}
    </UserContext.Provider>
  )
}
