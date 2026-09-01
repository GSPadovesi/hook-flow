import { useCallback, useEffect, useState } from 'react'
import { ClientApplicationContext } from '../context/index'
import { getAllClientApplication } from '@/service';
import type { ClientApplicationProps, ClientApplicationProviderProps } from '../types'

export const ClientApplicationProvider = ({ children }: ClientApplicationProviderProps) => {
  const [page, setPage] = useState<number>(0);
  const [size] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [applications, setApplications] = useState<ClientApplicationProps[]>([]);
  const [header] = useState<string[]>(["Nome", "Descrição", "API Keys", "Status"]);

  const handleNextPage = useCallback(() => {
    if (page >= totalPages - 1) return;

    setPage((currentPage) => currentPage + 1);
  }, [page, totalPages]);

  const handleBackPage = useCallback(() => {
    if (page <= 0) return;

    setPage((currentPage) => currentPage - 1);
  }, [page])

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getAllClientApplication(page, size);
        setApplications(data.content);
        setTotalPages(data.totalPages);
      } catch {
        setApplications([])
      }
    }

    getData()
  }, [page, size])

  return <ClientApplicationContext.Provider value={{ applications, page, totalPages, setApplications, setPage, handleNextPage, handleBackPage, header }}>
    {children}
  </ClientApplicationContext.Provider>
}
