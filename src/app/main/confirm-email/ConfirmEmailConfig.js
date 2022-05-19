import authRoles from '../../auth/authRoles';
import ConfirmEmail from './ConfirmEmail';

const ConfirmEmailConfig = {
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
      path: 'confirm-email/:token',
      element: <ConfirmEmail />,
    },
  ],
};

export default ConfirmEmailConfig;
