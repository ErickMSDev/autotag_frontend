import FusePageCarded from '@fuse/core/FusePageCarded';
import withReducer from 'app/store/withReducer';
import useThemeMediaQuery from '@fuse/hooks/useThemeMediaQuery';
import reducer from '../store/index';
import PortalAccountsHeader from './PortalAccountsHeader';
import PortalAccountsTable from './PortalAccountsTable';

function PortalAccounts() {
  const isMobile = useThemeMediaQuery((theme) => theme.breakpoints.down('lg'));

  return (
    <FusePageCarded
      header={<PortalAccountsHeader />}
      content={<PortalAccountsTable />}
      scroll={isMobile ? 'normal' : 'content'}
    />
  );
}

export default withReducer('main', reducer)(PortalAccounts);
