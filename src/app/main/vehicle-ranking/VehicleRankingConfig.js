import { authRoles } from 'app/auth';
import VehicleRanking from './VehicleRanking';

const VehicleRankingConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.demo,
  routes: [
    {
      path: 'vehicle-ranking',
      element: <VehicleRanking />,
    },
  ],
};

export default VehicleRankingConfig;
