import { Navigate } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import ExampleConfig from 'app/main/example/ExampleConfig';
import DashboardConfig from 'app/main/dashboard/DashboardConfig';
import TransitsConfig from 'app/main/transits/TransitsConfig';
import FreewayAnalysisConfig from 'app/main/freeway-analysis/FreewayAnalysisConfig';
import VehicleAnalysisConfig from 'app/main/vehicle-analysis/VehicleAnalysisConfig';
import DocumentListConfig from 'app/main/document-list/DocumentListConfig';
import PortalAccountsConfig from 'app/main/portal-accounts/PortalAccountsConfig';
import PortalAccountConfig from 'app/main/portal-account/PortalAccountConfig';
import FuseLoading from '@fuse/core/FuseLoading';
import Error404Page from 'app/main/404/Error404Page';
import LoginConfig from 'app/main/login/LoginConfig';
import RegisterConfig from 'app/main/register/RegisterConfig';
import ConfirmEmailConfig from 'app/main/confirm-email/ConfirmEmailConfig';
import MailConfirmConfig from 'app/main/mail-confirm/MailConfirmConfig';
import PurchaseConfig from 'app/main/purchase/PurchaseConfig';
import PurchaseReturn from 'app/main/purchase-return/PurchaseReturn';

const routeConfigs = [
  ExampleConfig,
  DashboardConfig,
  TransitsConfig,
  FreewayAnalysisConfig,
  VehicleAnalysisConfig,
  DocumentListConfig,
  PortalAccountsConfig,
  PortalAccountConfig,
  LoginConfig,
  RegisterConfig,
  ConfirmEmailConfig,
  MailConfirmConfig,
  PurchaseConfig,
  PurchaseReturn,
];

const routes = [
  // if you want to make whole app auth protected by default change defaultAuth for example:
  // ...FuseUtils.generateRoutesFromConfigs(routeConfigs, ['admin','staff','user']),
  // The individual route configs which has auth option won't be overridden.
  ...FuseUtils.generateRoutesFromConfigs(routeConfigs, null),
  {
    path: '/',
    element: <Navigate to="portal-accounts" />,
  },
  {
    path: 'loading',
    element: <FuseLoading />,
  },
  {
    path: '404',
    element: <Error404Page />,
  },
  {
    path: '*',
    element: <Navigate to="404" />,
  },
];

export default routes;
