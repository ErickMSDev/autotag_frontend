import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import es from './navigation-i18n/es';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('es', 'navigation', es);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
  {
    id: 'menu',
    title: 'menu',
    translate: 'MENU',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'portal-accounts-component',
        title: 'Cuentas de Portal',
        translate: 'PORTAL_ACCOUNTS',
        type: 'item',
        icon: 'whatshot',
        url: 'portal-accounts',
      },
      // {
      //   id: 'dashboard-component',
      //   title: 'Dashboard',
      //   translate: 'DASHBOARD',
      //   type: 'item',
      //   icon: 'whatshot',
      //   url: 'dashboard',
      // },
      {
        id: 'freeway-analysis',
        title: 'FreewayAnalysis',
        translate: 'FREEWAY_ANALYSIS',
        type: 'item',
        icon: 'whatshot',
        url: 'freeway-analysis',
      },
      {
        id: 'vehicle-analysis',
        title: 'VehicleAnalysis',
        translate: 'VEHICLE_ANALYSIS',
        type: 'item',
        icon: 'whatshot',
        url: 'vehicle-analysis',
      },
      {
        id: 'document-list',
        title: 'DocumentList',
        translate: 'DOCUMENT_LIST',
        type: 'item',
        icon: 'whatshot',
        url: 'document-list',
      },
      {
        id: 'transits-component',
        title: 'Transits',
        translate: 'TRANSITS',
        type: 'item',
        icon: 'whatshot',
        url: 'transits',
      },
      // {
      //   id: 'irregularities-component',
      //   title: 'Irregularities',
      //   translate: 'IRREGULARITIES',
      //   type: 'item',
      //   icon: 'whatshot',
      //   url: 'irregularities',
      // },
      // {
      //   id: 'excess-speed-component',
      //   title: 'ExcessSpeed',
      //   translate: 'EXCESS_SPEED',
      //   type: 'item',
      //   icon: 'whatshot',
      //   url: 'excess-speed',
      // },
    ],
  },
];

export default navigationConfig;
