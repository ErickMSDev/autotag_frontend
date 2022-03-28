import { authRoles } from 'app/auth';
import FreewayAnalysis from './FreewayAnalysis';

const FreewayAnalysisConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.user,
  routes: [
    {
      path: 'freeway-analysis',
      element: <FreewayAnalysis />,
    },
  ],
};

export default FreewayAnalysisConfig;
