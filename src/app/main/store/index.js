import { combineReducers } from '@reduxjs/toolkit';
import portalAccounts from './portalAccountsSlice';
import portalAccount from './portalAccountSlice';
import portals from './portalsSlice';
import dashboard from './dashboardSlice';
import transits from './transitsSlice';
import freewayAnalysis from './freewayAnalysisSlice';
import vehicleAnalysis from './vehicleAnalysisSlice';
import documentList from './documentListSlice';
import vehicleRanking from './vehicleRankingSlice';

const reducer = combineReducers({
  portalAccounts,
  portalAccount,
  portals,
  dashboard,
  transits,
  freewayAnalysis,
  vehicleAnalysis,
  documentList,
  vehicleRanking,
});

export default reducer;
