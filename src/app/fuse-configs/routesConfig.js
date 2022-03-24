import { Navigate } from 'react-router-dom';
import FuseUtils from '@fuse/utils';
import ExampleConfig from 'app/main/example/ExampleConfig';
import DashboardConfig from 'app/main/dashboard/DashboardConfig';
import TransitsConfig from 'app/main/transits/TransitsConfig';
import PortalAccountsConfig from 'app/main/portal-accounts/PortalAccountsConfig';
import PortalAccountConfig from 'app/main/portal-account/PortalAccountConfig';
import FuseLoading from '@fuse/core/FuseLoading';
import Error404Page from 'app/main/404/Error404Page';
import LoginConfig from 'app/main/login/LoginConfig';
import RegisterConfig from 'app/main/register/RegisterConfig';

const routeConfigs = [
  ExampleConfig,
  DashboardConfig,
  TransitsConfig,
  PortalAccountsConfig,
  PortalAccountConfig,
  LoginConfig,
  RegisterConfig,
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
