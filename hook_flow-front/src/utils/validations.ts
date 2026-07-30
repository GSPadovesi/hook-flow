const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const isRequiredValid = (value: string) => Boolean(value.trim())
export const isEmailValid = (email: string) => emailRegex.test(email.trim())
export const isPasswordConfirmationValid = (password: string, passwordConfirm: string) => password === passwordConfirm
