import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import { styled } from '@mui/material/styles';
import reducer from '../store/index';
import PortalAccountsHeader from './PortalAccountsHeader';
import PortalAccountsTable from './PortalAccountsTable';

const Root = styled(FusePageCarded)(({ theme }) => ({
  '& .FusePageCarded-header': {
    minHeight: 72,
    height: 72,
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      minHeight: 68,
      height: 68,
    },
  },
  '& .FusePageCarded-content': {
    display: 'flex',
  },
  '& .FusePageCarded-contentCard': {
    overflow: 'hidden',
  },
}));

function PortalAccounts() {
  return <Root header={<PortalAccountsHeader />} content={<PortalAccountsTable />} innerScroll />;
}

export default withReducer('main', reducer)(PortalAccounts);
