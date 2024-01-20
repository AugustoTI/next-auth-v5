'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { registerUser } from '~/actions/register-user'
import { useForm } from 'react-hook-form'
import { LuLoader2 } from 'react-icons/lu'
import { type z } from 'zod'
import * as React from 'react'

import { RegisterSchema } from '~/lib/validations/auth'
import { Button } from '~/components/ui/button'
import { CardWrapper } from '~/components/auth/card-wrapper'
import { PasswordInput } from '~/components/password-input'

import { FormError } from '../form-error'
import { FormSuccess } from '../form-success'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'

type Inputs = z.infer<typeof RegisterSchema>

export function RegisterForm() {
  const [isPending, startTransition] = React.useTransition()
  const [successMessage, setSuccessMessage] = React.useState('')
  const [errorMessage, setErrorMessage] = React.useState('')

  const form = useForm<Inputs>({
    defaultValues: { email: '', password: '', name: '' },
    disabled: isPending,
    resolver: zodResolver(RegisterSchema),
  })

  function onSubmit(data: Inputs) {
    setSuccessMessage('')
    setErrorMessage('')

    startTransition(async () => {
      try {
        const { message } = await registerUser(data)
        setSuccessMessage(message)
      } catch (err) {
        if (err instanceof Error) {
          setErrorMessage(err.message)
        }
      }
    })
  }

  return (
    <CardWrapper
      headerLabel="Crie sua conta"
      backButtonLabel="Já tem uma conta ?"
      backButtonHref="/auth/login"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="ExemploDeEmail@email.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <PasswordInput placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={errorMessage} />
          <FormSuccess message={successMessage} />
          <Button type="submit" className="w-full gap-x-2 uppercase" disabled={isPending}>
            {isPending && (
              <LuLoader2 size={16} className="animate-spin" aria-hidden="true" />
            )}
            Criar conta
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
