'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { type z } from 'zod'

import { LoginSchema } from '~/lib/validations/auth'
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

type Inputs = z.infer<typeof LoginSchema>

export function LoginForm() {
  const form = useForm<Inputs>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(LoginSchema),
  })

  function onSubmit(data: Inputs) {
    console.log(data)
  }

  return (
    <CardWrapper
      headerLabel="Bem vindo de volta!"
      backButtonLabel="Não tem uma conta ?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
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
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
