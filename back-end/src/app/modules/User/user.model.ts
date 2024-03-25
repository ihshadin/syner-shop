import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import { TUser, UserModel } from './user.interface';
import { USER_ROLE, UserStatus } from './user.constant';
import config from '../../config';

const userSchema = new Schema<TUser, UserModel>(
  {
    password: {
      type: 'String',
      required: true,
      select: 0,
    },
    email: {
      type: 'String',
      required: true,
      unique: true,
    },
    role: {
      type: 'String',
      enum: Object.values(USER_ROLE),
      default: USER_ROLE.customer,
    },
    status: {
      type: 'String',
      enum: UserStatus,
      default: 'active',
    },
    passwordChangeHistory: [
      {
        password: String,
        timestamp: Date,
      },
    ],
    passwordChangedAt: {
      type: Date,
    },
    isDeleted: {
      type: 'Boolean',
      default: false,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; // doc

  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

userSchema.pre('find', function (next) {
  this.select({ passwordChangeHistory: 0 });
  next();
});

userSchema.pre('findOne', function (next) {
  this.select({ passwordChangeHistory: 0 });
  next();
});

userSchema.pre('findOneAndUpdate', function (next) {
  this.select({ passwordChangeHistory: 0 });
  next();
});

userSchema.post('save', async function (doc, next) {
  doc.set('password', undefined);
  next();
});

userSchema.post('save', async function (doc, next) {
  doc.set('passwordChangeHistory', undefined);
  next();
});

userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await User.findOne({ email }).select(
    '+password passwordChangeHistory',
  );
};

userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

userSchema.statics.isJWTIssuedBeforePasswordChanged = function (
  passwordChangedTimestamp: Date,
  jwtIssuedTimestamp: number,
) {
  const passwordChangedTime =
    new Date(passwordChangedTimestamp).getTime() / 1000;
  return passwordChangedTime > jwtIssuedTimestamp;
};

export const User = model<TUser, UserModel>('User', userSchema);
