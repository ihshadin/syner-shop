import { z } from 'zod';

const createImagesValidation = z.object({
  public_id: z.string(),
  url: z.string(),
});

const createRatingsValidation = z.object({
  star: z.number(),
  comment: z.string(),
  postedBy: z.string(),
});

const createProductValidation = z.object({
  body: z.object({
    product: z.object({
      title: z.string(),
      slug: z.string().optional(),
      description: z.string(),
      category: z.string(),
      brand: z.string(),
      price: z.number(),
      quantity: z.number(),
      count: z.number(),
      stock: z.number(),
      sold: z.number(),
      images: z.array(createImagesValidation),
      color: z.array(z.string()),
      tags: z.string(),
      ratings: z.array(createRatingsValidation),
      totalRating: z.number(),
      isDeleted: z.boolean(),
    }),
  }),
});

//--------------------------------

const updateImagesValidation = z.object({
  public_id: z.string().optional(),
  url: z.string().optional(),
});

const updateRatingsValidation = z.object({
  star: z.number().optional(),
  comment: z.string().optional(),
  postedBy: z.string().optional(),
});

const updateProductValidation = z.object({
  body: z.object({
    product: z.object({
      title: z.string().optional(),
      slug: z.string().optional(),
      description: z.string().optional(),
      category: z.string().optional(),
      brand: z.string().optional(),
      price: z.number().optional(),
      quantity: z.number().optional(),
      count: z.number().optional(),
      stock: z.number().optional(),
      sold: z.number().optional(),
      images: z.array(updateImagesValidation).optional(),
      color: z.array(z.string()).optional(),
      tags: z.string().optional(),
      ratings: z.array(updateRatingsValidation).optional(),
      totalRating: z.number().optional(),
      isDeleted: z.boolean().optional(),
    }),
  }),
});

export const productValidation = {
  createProductValidation,
  updateProductValidation,
};
