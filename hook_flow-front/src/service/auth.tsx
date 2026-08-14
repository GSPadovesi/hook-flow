import { api } from "@/config";
import type { User } from "@/types";

export async function login(email: string, password: string, signal?: AbortSignal) {
  const { data } = await api.post<User | { user: User }>('/auth/login', { email, password }, { withCredentials: true, signal })
  return data
}

export async function register(username: string, name: string, email: string, password: string, signal?: AbortSignal) {
  const { data } = await api.post<User | { user: User }>('/auth/register', { username, name, email, password }, { withCredentials: true, signal })
  return data
}

export async function validateSession() {
  const body = await api.get<User>('/user')
  return body.data;
}

export async function logout() {
  await api.post('/auth/logout')
}

export async function csrf() {
  await api.get('/csrf')
}
