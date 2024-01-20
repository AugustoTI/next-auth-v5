import { z } from 'zod'

export const LoginSchema = z.object({
  email: z
    .string()
    .min(1, 'Esse campo não pode está vazio')
    .email('Forneça um E-Mail válido'),
  password: z.string().min(1, 'Esse campo não pode está vazio'),
})

export const RegisterSchema = z.object({
  email: z.string().min(1, 'Esse campo não pode está vazio').email(),
  password: z
    .string()
    .min(1, 'Esse campo não pode está vazio')
    .min(6, 'Esse campo precisa de pelo menos 6 caracteres'),
  name: z.string().min(1, 'Esse campo não pode está vazio'),
})
