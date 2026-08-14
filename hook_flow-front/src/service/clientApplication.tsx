import { api } from "@/config";

export async function getAllClientApplication(page: number) {
  const params = new URLSearchParams();
  params.append('page', page.toString());

  return await api.get<any>(`/client?${params.toString()}`)
}