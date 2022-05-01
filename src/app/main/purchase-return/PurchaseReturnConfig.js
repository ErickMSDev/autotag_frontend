import { authRoles } from 'app/auth';
import { lazy } from 'react';

const PurchaseReturn = lazy(() => import('./PurchaseReturn'));

const PurchaseReturnConfig = {
  settings: {
    layout: {
      config: {
        navbar: {
          display: false,
        },
        toolbar: {
          display: false,
        },
        footer: {
          display: false,
        },
        leftSidePanel: {
          display: false,
        },
        rightSidePanel: {
          display: false,
        },
      },
    },
  },
  auth: authRoles.demo,
  routes: [
    {
      path: 'purchase-return/:token',
      element: <PurchaseReturn />,
    },
  ],
};

export default PurchaseReturnConfig;
