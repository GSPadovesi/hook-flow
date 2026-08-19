import { api } from "@/config";
import type { ClientApplicationApiResponse } from "@/types";

export async function getAllClientApplication(page: number) {
  const params = new URLSearchParams();
  params.append('page', page.toString());

  return await api.get<ClientApplicationApiResponse[]>(`/client?${params.toString()}`)
}
