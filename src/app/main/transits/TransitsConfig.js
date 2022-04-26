import { authRoles } from 'app/auth';
import Transits from './Transits';

const TransitsConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.demo,
  routes: [
    {
      path: 'transits',
      element: <Transits />,
    },
  ],
};

export default TransitsConfig;
