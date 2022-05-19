import Button from '@mui/material/Button';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Hidden from '@mui/material/Hidden';

function PurchaseButton({ className }) {
  return (
    <Button
      component={Link}
      to="/purchase"
      className={clsx('', className)}
      variant="contained"
      color="secondary"
      startIcon={
        <Hidden lgDown>
          <FuseSvgIcon size={16}>heroicons-outline:shopping-cart</FuseSvgIcon>
        </Hidden>
      }
    >
      <span className="leading-4 lg:mx-4">
        Comprar{' '}
        <Hidden lgUp>
          <br />
        </Hidden>{' '}
        ViaSimple
      </span>
    </Button>
  );
}

export default PurchaseButton;
