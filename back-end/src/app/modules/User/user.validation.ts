import { z } from 'zod';

const createUserValidation = z.object({
  body: z.object({
    firstName: z.string(),
    lastName: z.string(),
    username: z.string(),
    mobileNumber: z.string(),
    password: z.string(),
    email: z.string().email(),
    address: z.string().optional(),
  }),
});

const loginUserValidation = z.object({
  body: z.object({
    username: z.string(),
    password: z
      .string({
        invalid_type_error: 'Password must be string',
      })
      .min(6, { message: 'Password can not be less than 6 characters' })
      .max(20, { message: 'Password can not be more than 20 characters' }),
  }),
});

export const UserValidation = {
  createUserValidation,
  loginUserValidation,
};
