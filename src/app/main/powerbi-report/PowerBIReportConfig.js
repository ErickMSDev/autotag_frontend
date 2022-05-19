import authRoles from '../../auth/authRoles';
import PowerBIReport from './PowerBIReport';

const PowerBIReportConfig = {
  settings: {
    layout: {
      config: {
        footer: {
          display: false,
        },
      },
    },
  },
  auth: authRoles.demo,
  routes: [
    {
      path: 'report/:name',
      element: <PowerBIReport />,
    },
  ],
};

export default PowerBIReportConfig;
