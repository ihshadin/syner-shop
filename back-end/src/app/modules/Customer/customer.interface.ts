import { Model, Types } from 'mongoose';

export type TCustomer = {
  email: string;
  user: Types.ObjectId;
  firstName: string;
  lastName: string;
  contactNo: string;
  address: string;
  profileImg?: string;
  isDeleted: boolean;
  wishlist?: Types.ObjectId[];
  //   cart: [];
};

export interface CustomerModel extends Model<TCustomer> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(username: string): Promise<TCustomer | null>;
}
