import { combineReducers } from '@reduxjs/toolkit';
import portalAccounts from './portalAccountsSlice';
import portalAccount from './portalAccountSlice';
import portals from './portalsSlice';
import dashboard from './dashboardSlice';
import transits from './transitsSlice';

const reducer = combineReducers({
  portalAccounts,
  portalAccount,
  portals,
  dashboard,
  transits,
});

export default reducer;
