import { combineReducers } from '@reduxjs/toolkit';
import portalAccounts from './portalAccountsSlice';
import portalAccount from './portalAccountSlice';
import portals from './portalsSlice';
import powerBi from './powerBiSlice';

const reducer = combineReducers({
  portalAccounts,
  portalAccount,
  portals,
  powerBi,
});

export default reducer;
