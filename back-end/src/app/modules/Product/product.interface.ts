import { Types } from 'mongoose';

export type TImages = {
  public_id: string;
  url: string;
};

export type TRatings = {
  star: number;
  comment: string;
  postedBy: Types.ObjectId;
};

export type TProduct = {
  title: string;
  slug?: string;
  description: string;
  category: string;
  brand: string;
  price: number;
  quantity: number;
  count: number;
  stock: number;
  sold: number;
  images: TImages[];
  color?: string[];
  tags?: string;
  ratings?: TRatings[];
  totalRating: number;
  isDeleted: boolean;
};

// export interface CustomerModel extends Model<TCustomer> {
//   // eslint-disable-next-line no-unused-vars
//   isUserExists(username: string): Promise<TCustomer | null>;
// }
