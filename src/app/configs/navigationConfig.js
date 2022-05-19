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
    id: 'portal-accounts-component',
    title: 'Cuentas de Portal',
    translate: 'PORTAL_ACCOUNTS',
    type: 'item',
    icon: 'whatshot',
    url: 'portal-accounts',
  },
  {
    id: 'freeway-analysis',
    title: 'FreewayAnalysis',
    translate: 'FREEWAY_ANALYSIS',
    type: 'item',
    icon: 'whatshot',
    url: 'report/FreewayAnalysis',
  },
  {
    id: 'vehicle-analysis',
    title: 'VehicleAnalysis',
    translate: 'VEHICLE_ANALYSIS',
    type: 'item',
    icon: 'whatshot',
    url: 'report/VehicleAnalysis',
  },
  {
    id: 'document-list',
    title: 'DocumentList',
    translate: 'DOCUMENT_LIST',
    type: 'item',
    icon: 'whatshot',
    url: 'report/DocumentList',
  },
  {
    id: 'transits-component',
    title: 'Transits',
    translate: 'TRANSITS',
    type: 'item',
    icon: 'whatshot',
    url: 'report/Transits',
  },
  {
    id: 'vehicle-ranking',
    title: 'VehicleRanking',
    translate: 'VEHICLE_RANKING',
    type: 'item',
    icon: 'whatshot',
    url: 'report/VehicleRanking',
  },
];

export default navigationConfig;
