import { Schema, model } from 'mongoose';
import { TParentCategory, TSubCategory } from './category.interface';

const parentCategorySchema = new Schema<TParentCategory>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    icon: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    subcategories: [{ type: Schema.Types.ObjectId, ref: 'Sub_Category' }],
  },
  { timestamps: true },
);

const subCategorySchema = new Schema<TSubCategory>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
    icon: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    parentCategory: {
      type: Schema.Types.ObjectId,
      ref: 'Parent_Category',
      required: true,
    },
  },
  { timestamps: true },
);

export const ParentCategoryModel = model<TParentCategory>(
  'Parent_Category',
  parentCategorySchema,
);

export const SubCategoryModel = model<TSubCategory>(
  'Sub_Category',
  subCategorySchema,
);

// filter out deleted documents
// productSchema.pre('find', function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   next();
// });

// productSchema.pre('findOne', function (next) {
//   this.find({ isDeleted: { $ne: true } });
//   next();
// });

// productSchema.pre('aggregate', function (next) {
//   this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
//   next();
// });
