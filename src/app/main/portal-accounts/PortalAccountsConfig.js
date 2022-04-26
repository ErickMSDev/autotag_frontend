import { authRoles } from 'app/auth';
import PortalAccounts from './PortalAccounts';

const PortalAccountsConfig = {
  settings: {
    layout: {
      config: {},
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

/**
 * Lazy load Example
 */
/*
import React from 'react';
const Example = React.lazy(() => import('./Example'));

const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : 'example',
            element: <Example/>
        }
    ]
};

export default ExampleConfig;

*/
