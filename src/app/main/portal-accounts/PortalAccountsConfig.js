import authRoles from '../../auth/authRoles';
import PortalAccounts from './PortalAccounts';

const PortalAccountsConfig = {
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
      path: 'portal-accounts',
      element: <PortalAccounts />,
    },
  ],
};

export default PortalAccountsConfig;
