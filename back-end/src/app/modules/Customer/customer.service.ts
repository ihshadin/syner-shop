import mongoose from 'mongoose';
import appError from '../../errors/appError';
import httpStatus from 'http-status';

import QueryBuilder from '../../builder/QueryBuilder';
import { customerSearchableFields } from './customer.constants';
import { Customer } from './customer.model';
import { TCustomer } from './customer.interface';
import { User } from '../User/user.model';

const getAllCustomerFromDb = async (query: Record<string, unknown>) => {
  const customerQuery = new QueryBuilder(Customer.find(), query)
    .search(customerSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await customerQuery.countTotal();
  const result = await customerQuery.modelQuery;

  return {
    meta,
    result,
  };
};

const getSingleCustomerFromDb = async (id: string) => {
  const result = await Customer.findById(id);
  return result;
};

const updateCustomerIntoDB = async (
  id: string,
  payload: Partial<TCustomer>,
) => {
  const result = await Customer.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteCustomerFromDb = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const deleteCustomer = await Customer.findByIdAndUpdate(
      id,
      { isDeleted: true },
      { upsert: true, session },
    );

    if (!deleteCustomer) {
      throw new appError(httpStatus.BAD_REQUEST, 'Failed to delete Customer');
    }

    const deletedUser = await User.findByIdAndUpdate(
      deleteCustomer._id,
      { isDeleted: true },
      { upsert: true, session },
    );

    if (!deletedUser) {
      throw new appError(httpStatus.BAD_REQUEST, 'Failed to delete User');
    }

    await session.commitTransaction();
    await session.endSession();

    return deleteCustomer;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to delete Customer');
  }
};

export const customerServices = {
  getAllCustomerFromDb,
  getSingleCustomerFromDb,
  updateCustomerIntoDB,
  deleteCustomerFromDb,
};
