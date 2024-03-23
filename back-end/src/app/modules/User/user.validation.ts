import { z } from 'zod';

const createCustomerValidation = z.object({
  body: z.object({
    password: z
      .string({
        invalid_type_error: 'Password must be string',
      })
      .min(6, { message: 'Password can not be less than 6 characters' })
      .max(20, { message: 'Password can not be more than 20 characters' }),
    customer: z.object({
      firstName: z.string(),
      lastName: z.string(),
      contactNo: z.string(),
      email: z.string().email(),
      address: z.string().optional(),
    }),
  }),
});

const loginUserValidation = z.object({
  body: z.object({
    email: z.string(),
    password: z
      .string({
        invalid_type_error: 'Password must be string',
      })
      .min(6, { message: 'Password can not be less than 6 characters' })
      .max(20, { message: 'Password can not be more than 20 characters' }),
  }),
});

export const UserValidation = {
  createCustomerValidation,
  loginUserValidation,
};
