import { authRoles } from 'app/auth';
import { lazy } from 'react';

const Purchase = lazy(() => import('./Purchase'));

const PurchaseConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.demo,
  routes: [
    {
      path: 'purchase',
      element: <Purchase />,
    },
  ],
};

export default PurchaseConfig;
