import { Schema, model } from 'mongoose';
import { CustomerModel, TCustomer } from './customer.interface';

const customerSchema = new Schema<TCustomer, CustomerModel>(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    contactNo: {
      type: String,
      required: true,
    },
    address: {
      type: String,
    },
    profileImg: {
      type: String,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    wishlist: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
        default: [],
      },
    ],
    // cart: {
    //   type: Array,
    //   default: [],
    // },
  },
  {
    timestamps: true,
  },
);

export const Customer = model<TCustomer, CustomerModel>(
  'Customer',
  customerSchema,
);
