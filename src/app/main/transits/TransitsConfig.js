import { authRoles } from 'app/auth';
import Transits from './Transits';

const TransitsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.user,
  routes: [
    {
      path: 'transits',
      element: <Transits />,
    },
  ],
};

export default TransitsConfig;
