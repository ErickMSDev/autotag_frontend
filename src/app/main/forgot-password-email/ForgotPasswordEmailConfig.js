import ForgotPasswordEmail from './ForgotPasswordEmail';
import authRoles from '../../auth/authRoles';

const ForgotPasswordEmailConfig = {
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
  auth: authRoles.onlyGuest,
  routes: [
    {
      path: 'forgot-password-email/:email',
      element: <ForgotPasswordEmail />,
    },
  ],
};

export default ForgotPasswordEmailConfig;
