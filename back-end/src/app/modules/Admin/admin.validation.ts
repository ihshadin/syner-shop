import { z } from 'zod';

export const registrationAdminValidationSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    admin: z.object({
      email: z.string().email(),
      designation: z.string(),
      firstName: z.string().min(2).max(20),
      lastName: z.string().min(2).max(20),
      contactNo: z.string(),
      address: z.string(),
      profileImg: z.string().optional(),
    }),
  }),
});

export const updateAdminValidationSchema = z.object({
  body: z.object({
    admin: z.object({
      email: z.string().email().optional(),
      designation: z.string().optional(),
      firstName: z.string().min(2).max(20).optional(),
      lastName: z.string().min(2).max(20).optional(),
      contactNo: z.string().optional(),
      address: z.string().optional(),
      profileImg: z.string().optional(),
    }),
  }),
});

export const adminValidations = {
  registrationAdminValidationSchema,
  updateAdminValidationSchema,
};
