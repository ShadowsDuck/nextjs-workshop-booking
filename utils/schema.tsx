import { z } from 'zod'

// export const campingSchema = z.object({
//   title: z.string().min(1, 'Title must be at least 1 characters long'),
//   price: z.coerce.number().min(1, 'Price must be greater than 0'),
//   description: z.string().max(500, 'Description must be less than 500 characters long'),
//   category: z.string(),
//   lat: z.coerce.number(),
//   lng: z.coerce.number(),
// })

export const profileSchema = z.object({
  firstname: z
    .string()
    .min(1, 'Firstname must be at least 1 characters long')
    .max(30, 'Firstname must be less than 30 characters long'),
  lastname: z
    .string()
    .min(1, 'Lastname must be at least 1 characters long')
    .max(30, 'Lastname must be less than 30 characters long'),
})
