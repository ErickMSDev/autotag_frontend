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
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { savePortalAccount, removePortalAccount } from '../store/portalAccountSlice';

function ProductHeader(props) {
  const dispatch = useDispatch();
  const methods = useFormContext();
  const { formState, watch, getValues, setError } = methods;
  const { isValid, dirtyFields } = formState;
  const run = watch('run');
  const theme = useTheme();
  const navigate = useNavigate();

  function handleSavePortalAccount() {
    dispatch(savePortalAccount(getValues())).then((action) => {
      if (!action.payload.error) {
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
      } else {
        action.payload.error.forEach((error) => {
          setError(error.type, {
            type: 'manual',
            message: error.message,
          });
        });
      }
    });
  }

  function handleRemovePortalAccount() {
    dispatch(removePortalAccount()).then(() => {
      navigate('/portal-accounts');
    });
  }

  return (
    <div className="flex flex-col sm:flex-row flex-1 w-full items-center justify-between space-y-8 sm:space-y-0 py-32 px-24 md:px-32">
      <div className="flex flex-col items-center sm:items-start space-y-8 sm:space-y-0 w-full sm:max-w-full min-w-0">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          <Typography
            className="flex items-center sm:mb-8"
            component={Link}
            role="button"
            to="/portal-accounts"
            color="inherit"
          >
            <FuseSvgIcon size={20}>
              {theme.direction === 'ltr'
                ? 'heroicons-outline:arrow-sm-left'
                : 'heroicons-outline:arrow-sm-right'}
            </FuseSvgIcon>
            <span className="flex mx-4 font-medium">Credenciales Autopistas</span>
          </Typography>
        </motion.div>

        <div className="flex items-center max-w-full">
          <div className="flex flex-col min-w-0 mx-8 sm:mc-16">
            <motion.div initial={{ x: -20 }} animate={{ x: 0, transition: { delay: 0.3 } }}>
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
          disabled={!getValues('id')}
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
