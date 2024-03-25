import { Model, Types } from 'mongoose';

export type TAdmin = {
  email: string;
  user: Types.ObjectId;
  designation: string;
  firstName: string;
  lastName: string;
  contactNo: string;
  address: string;
  profileImg?: string;
  isDeleted: boolean;
};

export interface AdminModel extends Model<TAdmin> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(email: string): Promise<TAdmin | null>;
}
