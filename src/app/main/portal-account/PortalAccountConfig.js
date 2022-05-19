import authRoles from '../../auth/authRoles';
import PortalAccount from './PortalAccount';

const PortalAccountConfig = {
  settings: {
    layout: {
      config: {
        footer: {
          display: false,
        },
      },
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
