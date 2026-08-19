import { api } from "@/config";

export async function createApiKey(applicationId: string, signal?: AbortSignal) {
  const { data } = await api.post('/api-key', { applicationId }, { withCredentials: true, signal });
  return data;
}