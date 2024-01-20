import { LuCheckCircle2 } from 'react-icons/lu'

interface FormSuccessProps {
  message?: string
}

export function FormSuccess({ message }: FormSuccessProps) {
  if (!message) return null

  return (
    <div className="flex items-center gap-x-2 rounded-md bg-emerald-500/15 p-3 text-sm text-emerald-500">
      <LuCheckCircle2 size={16} />
      <p>{message}</p>
    </div>
  )
}
