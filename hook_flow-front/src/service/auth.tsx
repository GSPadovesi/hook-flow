import { api } from "@/config";

export async function login(email: string, password: string, signal?: AbortSignal) {
  await api.post('/auth/login', { email, password }, { withCredentials: true, signal })
}

export async function register(name: string, email: string, password: string) {
  const { data } = await api.post<{ token: string }>('/auth/register', { name, email, password })
  return data
}

export async function validateSession() {
  const body = await api.get('/auth/user')
  return body.data;
}
