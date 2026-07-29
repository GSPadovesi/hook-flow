export const AUTH_TOKEN_KEY = 'hook_flow_auth_token'

export function isAuthenticated() {
  return Boolean(localStorage.getItem(AUTH_TOKEN_KEY))
}
