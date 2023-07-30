import { z } from "zod"

export const schemaLogin = z.object({
    email: z.string().email("e-mail invalido"),
    password: z.string().nonempty("Senha é obrigatória")
})

export const schemaRegister = z.object({
    email: z.string().email("e-mail invalido"),
    password: z.string().nonempty("Senha é obrigatória"),
    name: z.string(),
    phone: z.string()
})

export const schemaRegisterContact = z.object({
    email: z.string().email("e-mail invalido"),
    name: z.string(),
    phone: z.string()
})

export const schemaUpdateContact = z.object({
    email: z.string().email("e-mail invalido").optional(),
    name: z.string().optional(),
    phone: z.string().optional()
})

export type iLoginFormData = z.infer<typeof schemaLogin>

export type iRegisterFormData = z.infer<typeof schemaRegister>

export type iRegisterContactFormData = z.infer<typeof schemaRegisterContact>

export type iUpdateContactFormData = z.infer<typeof schemaUpdateContact>


