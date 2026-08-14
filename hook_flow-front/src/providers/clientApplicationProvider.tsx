import { useEffect, useState } from 'react'
import { ClientApplicationContext } from '../context/index'
import { getAllClientApplication } from '@/service';
import type { ClientApplicationProps, ClientApplicationProviderProps, KeysProps } from '../types'

export const ClientApplicationProvider = ({ children }: ClientApplicationProviderProps) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [applications, setApplications] = useState<ClientApplicationProps[]>([]);
  const [page, setPage] = useState<number | null>(null);
  const [header] = useState<string[]>(["Nome", "Descrição", "API Keys", "Status"]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllClientApplication(0);
        console.log(response)
        setApplications(response.data.map((item: any) => (
          {
            id: item.id,
            name: item.name,
            description: item.description,
            status: item.active,
            ownerId: item.ownerId,
            keys: item.keys.map((key: KeysProps) => ({
              id: key.id,
              status: key.active
            }))
          }
        )))
      } catch (err) {
        console.log(err)
      }
    }

    getData()
  }, [])

  console.log(applications)

  return <ClientApplicationContext.Provider value={{ applications, header }}>
    {children}
  </ClientApplicationContext.Provider>
}