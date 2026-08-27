import { ToastContainer, toast } from 'react-toastify'
import { Button } from '../button'
import 'react-toastify/dist/ReactToastify.css'

const toastOptions = {
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: 'light',
} as const

type PromiseToastMessages = {
  confirm: string
  pending: string
  success: string
  error: string
  confirmLabel?: string
  cancelLabel?: string
}

export const appToast = {
  success: (message: string) => toast.success(message, toastOptions),
  error: (message: string) => toast.error(message, toastOptions),
  promise: <T,>(promise: () => Promise<T>, messages: PromiseToastMessages) => {
    return new Promise<T | false>((resolve, reject) => {
      toast(({ closeToast }) => (
        <div style={{ display: 'grid', gap: '12px' }}>
          <span>{messages.confirm}</span>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
            <Button
              variant="danger"
              type="button"
              style={{ padding: '10px 16px', fontSize: '14px', borderRadius: '8px' }}
              onClick={async () => {
                closeToast()

                try {
                  const result = await toast.promise(promise(), {
                    pending: messages.pending,
                    success: messages.success,
                    error: messages.error,
                  }, toastOptions)

                  resolve(result)
                } catch (error) {
                  reject(error)
                }
              }}
            >
              {messages.confirmLabel ?? 'Apagar'}
            </Button>
            <Button
              variant="secondary"
              type="button"
              style={{ padding: '10px 16px', fontSize: '14px', borderRadius: '8px' }}
              onClick={() => {
                closeToast()
                resolve(false)
              }}
            >
              {messages.cancelLabel ?? 'Cancelar'}
            </Button>
          </div>
        </div>
      ), {
        ...toastOptions,
        autoClose: false,
        closeOnClick: false,
      })
    })
  },
}

export const AppToast = () => {
  return <ToastContainer {...toastOptions} />
}
