import { api } from "@/config";
import type { ClientApplicationApiResponse, ClientApplicationProps } from "@/types";

export async function getAllClientApplication(page: number) {
  const params = new URLSearchParams();
  params.append('page', page.toString());

  return await api.get<ClientApplicationApiResponse[]>(`/client?${params.toString()}`)
}

export async function createClientApplication(name: string, description: string, signal?: AbortSignal) {
  const { data } = await api.post<ClientApplicationProps>("/client", { name, description }, { withCredentials: true, signal })
  return data
}

export async function deleteClientApplication(id: string, signal?: AbortSignal) {
  await api.delete(`/client/${id}`, { withCredentials: true, signal });
  return;
}