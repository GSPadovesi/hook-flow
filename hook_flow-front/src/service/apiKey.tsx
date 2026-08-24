import { api } from "@/config";

export async function createApiKey(applicationId: string, signal?: AbortSignal) {
  // se `api` não estiver acessível global, roda isso num breakpoint/console dentro do seu app
  console.log('xsrf config:', {
    withXSRFToken: api.defaults.withXSRFToken,
    xsrfCookieName: api.defaults.xsrfCookieName,
    xsrfHeaderName: api.defaults.xsrfHeaderName,
    withCredentials: api.defaults.withCredentials,
    baseURL: api.defaults.baseURL,
  });
  const { data } = await api.post('/api-key', { applicationId }, { withCredentials: true, signal });
  return data;
}