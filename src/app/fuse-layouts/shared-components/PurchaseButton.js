import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { Link } from 'react-router-dom';
import Hidden from '@mui/material/Hidden';
import clsx from 'clsx';

function PurchaseButton({ className }) {
  return (
    <Button
      component={Link}
      to="/purchase"
      className={clsx('', className)}
      variant="contained"
      color="success"
    >
      <Hidden lgDown>
        <Icon className="text-16">shopping_cart</Icon>
      </Hidden>
      <span className="lg:mx-4">Comprar ViaSimple</span>
    </Button>
  );
}

export default PurchaseButton;
