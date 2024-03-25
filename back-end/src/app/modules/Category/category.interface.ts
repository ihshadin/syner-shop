import { Types } from 'mongoose';

export type TParentCategory = {
  title: string;
  icon: string;
  slug: string;
  subcategories?: Types.ObjectId[];
};

export type TSubCategory = {
  title: string;
  icon: string;
  slug: string;
  parentCategory: Types.ObjectId;
};

// export interface CustomerModel extends Model<TCustomer> {
//   // eslint-disable-next-line no-unused-vars
//   isUserExists(username: string): Promise<TCustomer | null>;
// }
