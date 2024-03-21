import config from '../config';
import { USER_ROLE } from '../modules/User/user.constant';
import { User } from '../modules/User/user.model';

const superUser = {
  firstName: 'Syner',
  lastName: 'Shop',
  username: 'synershop',
  mobileNumber: '123456789',
  email: 'websyner23@gmail.com',
  password: config.super_admin_password,
  role: USER_ROLE.superAdmin,
  isBlocked: false,
};

const seedSuperAdmin = async () => {
  //when database is connected, we will check is there any user who is super admin
  const isSuperAdminExits = await User.findOne({ role: USER_ROLE.superAdmin });

  if (!isSuperAdminExits) {
    await User.create(superUser);
  }
};

export default seedSuperAdmin;
