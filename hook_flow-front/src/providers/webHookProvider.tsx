import { WebHookContext } from "@/context"
import { getAllWebHook } from "@/service";
import type { WebHookProps, WebHookProviderProps } from "@/types"
import { useCallback, useEffect, useState } from "react";

export const WebHookProvider = ({ children }: WebHookProviderProps) => {
  const [webHooks, setWebHooks] = useState<WebHookProps[]>([]);
  const [applicationId, setApplicationId] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const [size] = useState<number>(10);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [header] = useState<string[]>(["URL", "Applicação", "Status"]);

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
        const data = await getAllWebHook(page, size, applicationId);
        setWebHooks(data.content);
        setTotalPages(data.totalPages);
      } catch {
        setWebHooks([])
      }
    }

    getData()
  }, [page, size, applicationId])

  return <WebHookContext.Provider value={{ webHooks, applicationId, page, totalPages, header, setWebHooks, setPage, setApplicationId, handleNextPage, handleBackPage }}>
    {children}
  </WebHookContext.Provider>
}
