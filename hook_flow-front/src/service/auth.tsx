import { api } from "@/config";

export async function login(email: string, password: string, signal?: AbortSignal) {
  await api.post('/auth/login', { email, password }, { withCredentials: true, signal })
}

export async function register(username: string, name: string, email: string, password: string, signal?: AbortSignal) {
  const { data } = await api.post<{ token: string }>('/auth/register', { username, name, email, password }, { withCredentials: true, signal })
  return data
}

export async function validateSession() {
  const body = await api.get('/auth/user')
  return body.data;
}

export async function logout() {
  await api.post('/auth/logout')
}
