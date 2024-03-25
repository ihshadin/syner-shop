import { z } from 'zod';

const createParentCategoryValidation = z.object({
  body: z.object({
    category: z.object({
      title: z.string().min(1),
      icon: z.string().min(1),
      subcategories: z.array(z.string()).optional(),
    }),
  }),
});

const createSubCategoryValidation = z.object({
  body: z.object({
    subCategory: z.object({
      title: z.string().min(1),
      icon: z.string().min(1),
      parentCategory: z.string(),
    }),
  }),
});

//--------------------------------

const updateParentCategoryValidation = z.object({
  body: z.object({
    category: z.object({
      title: z.string().min(1).optional(),
      icon: z.string().min(1).optional(),
      subcategories: z.array(z.string()).optional(),
    }),
  }),
});

const updateSubCategoryValidation = z.object({
  body: z.object({
    sub_category: z.object({
      title: z.string().min(1).optional(),
      icon: z.string().min(1).optional(),
      parentCategory: z.string().optional(),
    }),
  }),
});

export const categoryValidation = {
  createParentCategoryValidation,
  createSubCategoryValidation,
  updateParentCategoryValidation,
  updateSubCategoryValidation,
};
