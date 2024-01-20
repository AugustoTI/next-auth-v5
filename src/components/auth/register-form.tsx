'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { type z } from 'zod'
import * as React from 'react'

import { RegisterSchema } from '~/lib/validations/auth'
import { Button } from '~/components/ui/button'
import { CardWrapper } from '~/components/auth/card-wrapper'
import { PasswordInput } from '~/components/password-input'

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

  const form = useForm<Inputs>({
    defaultValues: { email: '', password: '', name: '' },
    disabled: isPending,
    resolver: zodResolver(RegisterSchema),
  })

  function onSubmit(data: Inputs) {
    startTransition(async () => {
      console.log(data)
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
          <Button type="submit" className="w-full uppercase" disabled={isPending}>
            Criar conta
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
