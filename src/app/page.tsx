import Link from 'next/link'

import { Button } from '~/components/ui/button'

export default function HomePage() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-500 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-semibold text-white drop-shadow-md">Auth.JS 🔐</h1>
        <p className="text-lg text-white [&_b]:underline [&_b]:underline-offset-4">
          Um <b>Robusto</b>, <b>Flexivel</b> e <b>Open Source</b> serviço de autenticação.
        </p>
        <Button size="lg" className="uppercase" variant="secondary" asChild>
          <Link href="/auth/login">Login</Link>
        </Button>
      </div>
    </main>
  )
}
