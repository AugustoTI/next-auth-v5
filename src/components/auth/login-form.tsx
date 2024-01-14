'use client'

import { CardWrapper } from '~/components/auth/card-wrapper'

export function LoginForm() {
  return (
    <CardWrapper
      headerLabel="Bem vindo de volta!"
      backButtonLabel="Não tem uma conta ?"
      backButtonHref="/auth/register"
      showSocial
    >
      Login Form
    </CardWrapper>
  )
}
