import { useEffect, useState } from 'react'
import { ClientApplicationContext } from '../context/index'
import { getAllClientApplication } from '@/service';
import type { ClientApplicationProps, ClientApplicationProviderProps } from '../types'

export const ClientApplicationProvider = ({ children }: ClientApplicationProviderProps) => {
  const [applications, setApplications] = useState<ClientApplicationProps[]>([]);
  const [header] = useState<string[]>(["Nome", "Descrição", "API Keys", "Status"]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllClientApplication(0);
        setApplications(response.data.map((item) => (
          {
            id: item.id,
            name: item.name,
            description: item.description,
            status: item.active,
            ownerId: item.ownerId,
            keys: item.keys.map((key) => ({
              id: key.id,
              active: key.active
            }))
          }
        )))
      } catch {
        setApplications([])
      }
    }

    getData()
  }, [])

  return <ClientApplicationContext.Provider value={{ applications, setApplications, header }}>
    {children}
  </ClientApplicationContext.Provider>
}
