import ForgotPasswordPage from './ForgotPasswordPage';
import authRoles from '../../auth/authRoles';

const SignUpConfig = {
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
      path: 'forgot-password',
      element: <ForgotPasswordPage />,
    },
  ],
};

export default SignUpConfig;
