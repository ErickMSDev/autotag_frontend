import { authRoles } from 'app/auth';
import DocumentList from './DocumentList';

const DocumentListConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  auth: authRoles.user,
  routes: [
    {
      path: 'document-list',
      element: <DocumentList />,
    },
  ],
};

export default DocumentListConfig;
