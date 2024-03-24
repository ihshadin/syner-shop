import mongoose, { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';

const imagesSchema = new mongoose.Schema({
  public_id: { type: String, required: true },
  url: { type: String, required: true },
});

// Define the schema for TRatings
const ratingsSchema = new mongoose.Schema({
  star: { type: Number, required: true },
  comment: { type: String, required: true },
  postedBy: { type: mongoose.Types.ObjectId, required: true },
});

const productSchema = new Schema<TProduct>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    count: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    sold: {
      type: Number,
      default: 0,
    },
    images: {
      type: [imagesSchema],
      required: true,
    },
    color: {
      type: [String],
    },
    tags: {
      type: String,
    },
    ratings: {
      type: [ratingsSchema],
    },
    totalRating: {
      type: Number,
      default: 0,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

// filter out deleted documents
productSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

productSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});

productSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

export const Product = model<TProduct>('Product', productSchema);
