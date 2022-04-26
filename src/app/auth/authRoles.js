/**
 * Authorization Roles
 */
const authRoles = {
  admin: ['admin'],
  staff: ['admin', 'staff'],
  business: ['admin', 'staff', 'business'],
  pyme: ['admin', 'staff', 'business', 'pyme'],
  user: ['admin', 'staff', 'business', 'pyme', 'user'],
  demo: ['admin', 'staff', 'business', 'pyme', 'user', 'demo'],
  onlyGuest: [],
};

export default authRoles;
