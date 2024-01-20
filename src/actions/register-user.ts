'use server'

import { getUserByEmail } from '~/data/user'
import bcrypt from 'bcrypt'
import { type z } from 'zod'

import { db } from '~/lib/database'
import { RegisterSchema } from '~/lib/validations/auth'

type NewUser = z.infer<typeof RegisterSchema>

export async function registerUser(newUser: NewUser) {
  const validatedFields = RegisterSchema.safeParse(newUser)

  if (!validatedFields.success) {
    throw new Error('Campos invalidos!')
  }

  const { name, email, password } = validatedFields.data

  const existedUser = await getUserByEmail(email)

  if (existedUser) {
    throw new Error('Email já cadastrado. Tente outro')
  }

  const hashPassword = await bcrypt.hash(password, 10)
  const createdUser = await db.user.create({
    data: { name, email, password: hashPassword },
  })

  // TODO: Send verification token email

  return { data: createdUser, message: 'Usuário criado com sucesso' }
}
