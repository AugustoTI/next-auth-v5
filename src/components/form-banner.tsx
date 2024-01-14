import { LuCheckCircle2, LuXCircle } from 'react-icons/lu'

import { cn } from '~/lib/utils'

interface FormBannerProps {
  type: 'success' | 'error'
  message: string
}

export function FormBanner({ type, message }: FormBannerProps) {
  return (
    <div
      className={cn('flex items-center gap-x-2 rounded-md p-3 text-sm', {
        'bg-destructive/15 text-destructive': type === 'error',
        'bg-emerald-500/15 text-emerald-500': type === 'success',
      })}
    >
      {type === 'error' && <LuXCircle size={16} />}
      {type === 'success' && <LuCheckCircle2 size={16} />}
      <p>{message}</p>
    </div>
  )
}
