import { api } from "@/config";
import type { WebHookProps, WebHookResponse } from "@/types";

export async function getAllWebHook(page: number, size: number, applicationId: string) {
  const params = new URLSearchParams();
  params.append('applicationId', applicationId);
  params.append('page', page.toString());
  params.append('size', size.toString());

  const { data } = await api.get<WebHookResponse>(`/web-hooks?${params.toString()}`);


  return data
}

export async function createWebHook(clientApplicationId: string, url: string, signal?: AbortSignal) {
  const { data } = await api.post<WebHookProps>('/web-hooks', { clientApplicationId, url }, { withCredentials: true, signal })
  return data;
}
