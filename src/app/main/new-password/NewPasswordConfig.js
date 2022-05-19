import NewPassword from './NewPassword';
import authRoles from '../../auth/authRoles';

const NewPasswordConfig = {
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
      path: 'new-password/:token',
      element: <NewPassword />,
    },
  ],
};

export default NewPasswordConfig;
