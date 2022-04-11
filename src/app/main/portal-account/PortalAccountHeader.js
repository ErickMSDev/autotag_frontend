import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useFormContext } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import _ from '@lodash';
import { showMessage } from 'app/store/fuse/messageSlice';
import { savePortalAccount, removePortalAccount } from '../store/portalAccountSlice';

function ProductHeader(props) {
  const dispatch = useDispatch();
  const methods = useFormContext();
  const { formState, watch, getValues } = methods;
  const { isValid, dirtyFields, errors } = formState;
  const run = watch('run');
  const theme = useTheme();
  const navigate = useNavigate();

  function handleSavePortalAccount() {
    dispatch(savePortalAccount(getValues())).then((action) => {
      const textMessage = action.payload.enabled
        ? `Cuenta guardada.
        Se comenzará a descargar la información.
        Esto puede tomar hasta 15 minutos.
        Te enviaremos un correo cuando el proceso esté listo.`
        : 'Cuenta guardada';
      dispatch(
        showMessage({
          message: textMessage,
          autoHideDuration: 100000,
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
          },
          variant: 'success',
        })
      );
    });
  }

  function handleRemovePortalAccount() {
    dispatch(removePortalAccount()).then(() => {
      navigate('/portal-accounts');
    });
  }

  return (
    <div className="flex flex-1 w-full items-center justify-between">
      <div className="flex flex-col items-start max-w-full min-w-0">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          <Typography
            className="flex items-center sm:mb-12"
            component={Link}
            role="button"
            to="/portal-accounts"
            color="inherit"
          >
            <Icon className="text-20">
              {theme.direction === 'ltr' ? 'arrow_back' : 'arrow_forward'}
            </Icon>
            <span className="hidden sm:flex mx-4 font-medium">Credenciales Autopistas</span>
          </Typography>
        </motion.div>

        <div className="flex items-center max-w-full">
          <motion.div
            className="hidden sm:flex"
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { delay: 0.3 } }}
          >
            <img
              className="w-32 sm:w-48 rounded"
              src="assets/images/ecommerce/product-image-placeholder.png"
              alt="superplaceholder"
            />
          </motion.div>
          <div className="flex flex-col min-w-0 mx-8 sm:mc-16">
            <motion.div initial={{ x: -20 }} animate={{ x: 0, transition: { delay: 0.3 } }}>
              <Typography className="text-16 sm:text-20 truncate font-semibold">
                {run || 'Nueva cuenta'}
              </Typography>
              <Typography variant="caption" className="font-medium">
                Detalles de la cuenta
              </Typography>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className="flex"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
      >
        <Button
          className="whitespace-nowrap mx-4"
          variant="contained"
          color="secondary"
          onClick={handleRemovePortalAccount}
          startIcon={<Icon className="hidden sm:flex">delete</Icon>}
        >
          Eliminar
        </Button>
        <Button
          className="whitespace-nowrap mx-4"
          variant="contained"
          color="secondary"
          disabled={_.isEmpty(dirtyFields) || !isValid}
          onClick={handleSavePortalAccount}
        >
          Guardar
        </Button>
      </motion.div>
    </div>
  );
}

export default ProductHeader;
