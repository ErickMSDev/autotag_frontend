import { authRoles } from 'app/auth';
import VehicleAnalysis from './VehicleAnalysis';

const VehicleAnalysisConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.demo,
  routes: [
    {
      path: 'vehicle-analysis',
      element: <VehicleAnalysis />,
    },
  ],
};

export default VehicleAnalysisConfig;
