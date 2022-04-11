import { lazy } from 'react';

const MailConfirm = lazy(() => import('./MailConfirm'));

const MailConfirmConfig = {
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
  routes: [
    {
      path: 'mail-confirm/:email',
      element: <MailConfirm />,
    },
  ],
};

export default MailConfirmConfig;
