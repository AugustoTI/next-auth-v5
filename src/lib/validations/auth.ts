import { z } from 'zod'

export const LoginSchema = z.object({
  email: z.string().min(1, 'Esse campo não pode está vazio').email(),
  password: z.string().min(1, 'Esse campo não pode está vazio'),
})
