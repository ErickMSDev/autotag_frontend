import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from 'react';

function HideValue({ children }) {
  const [showValue, setShowValue] = useState(false);
  return (
    <>
      <IconButton
        aria-label={showValue ? 'ocultar valor' : 'mostrar valor'}
        size="large"
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          setShowValue(!showValue);
        }}
      >
        {showValue ? <VisibilityOffIcon /> : <VisibilityIcon />}
      </IconButton>
      {showValue ? children : '•••••••••••'}
    </>
  );
}

export default HideValue;
