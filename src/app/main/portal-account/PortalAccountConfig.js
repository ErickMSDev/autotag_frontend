import { authRoles } from 'app/auth';
import PortalAccount from './PortalAccount';

const PortalAccountConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.demo,
  routes: [
    {
      path: 'portal-accounts/:portalAccountId/*',
      element: <PortalAccount />,
    },
  ],
};

export default PortalAccountConfig;
