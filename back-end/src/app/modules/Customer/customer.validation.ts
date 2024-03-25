import { z } from 'zod';

const registrationCustomerValidation = z.object({
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

const updateCustomerValidation = z.object({
  body: z.object({
    customer: z.object({
      firstName: z.string().optional(),
      lastName: z.string().optional(),
      contactNo: z.string().optional(),
      email: z.string().email().optional(),
      address: z.string().optional(),
    }),
  }),
});

export const customerValidation = {
  registrationCustomerValidation,
  updateCustomerValidation,
};
