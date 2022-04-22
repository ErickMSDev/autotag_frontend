import FuseLoading from '@fuse/core/FuseLoading';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { useDeepCompareEffect } from '@fuse/hooks';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import withReducer from 'app/store/withReducer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import _ from '@lodash';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { styled } from '@mui/material/styles';
import { validate as rutValidate } from 'rut.js';
import {
  resetPortalAccount,
  newPortalAccount,
  getPortalAccount,
} from '../store/portalAccountSlice';
import { getPortals } from '../store/portalsSlice';
import reducer from '../store';
import PortalAccountHeader from './PortalAccountHeader';
import BasicInfoTab from './tabs/BasicInfoTab';

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
}));

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  portalId: yup.number('Debes seleccionar un portal'),
  run: yup
    .string()
    .required('Debes ingresar un rut')
    .test('validRut', 'Ingresa un rut válido', (value) => rutValidate(value)),
  password: yup
    .string()
    .required('Debes ingresar una contraseña')
    .min(3, 'Debes ingresar al menos 5 caracteres'),
});

function PortalAccount(props) {
  const dispatch = useDispatch();
  const portalAccount = useSelector((store) => store.main.portalAccount);
  const { arrPortals } = useSelector((store) => store.main.portals);

  const routeParams = useParams();
  const [tabValue, setTabValue] = useState(0);
  const [noPortalAccount, setNoPortalAccount] = useState(false);
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  const { reset, watch, control, onChange, formState } = methods;
  const form = watch();

  useDeepCompareEffect(() => {
    function updatePortalAccountState() {
      const { portalAccountId } = routeParams;

      if (portalAccountId === 'new') {
        /**
         * Create New Product data
         */
        dispatch(newPortalAccount());
      } else {
        const intPortalAccountId = parseInt(portalAccountId, 10);
        dispatch(getPortalAccount(intPortalAccountId)).then((action) => {
          /**
           * If the requested product is not exist show message
           */
          if (!action.payload) {
            setNoPortalAccount(true);
          }
        });
      }
    }

    updatePortalAccountState();
  }, [dispatch, routeParams]);

  useEffect(() => {
    if (!portalAccount || portalAccount.error) {
      return;
    }
    /**
     * Reset the form on product state changes
     */
    reset(portalAccount);
  }, [portalAccount, reset]);

  useEffect(() => {
    return () => {
      /**
       * Reset Product on component unload
       */
      dispatch(resetPortalAccount());
      setNoPortalAccount(false);
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPortals());
  }, [dispatch]);

  /**
   * Tab Change
   */
  function handleTabChange(event, value) {
    setTabValue(value);
  }

  /**
   * Show Message if the requested products is not exists
   */
  if (noPortalAccount) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.1 } }}
        className="flex flex-col flex-1 items-center justify-center h-full"
      >
        <Typography color="textSecondary" variant="h5">
          No se encontraron autopistas!
        </Typography>
        <Button
          className="mt-24"
          component={Link}
          variant="outlined"
          to="/portal-accounts"
          color="inherit"
        >
          Ir a Credenciales Autopistas
        </Button>
      </motion.div>
    );
  }

  /**
   * Wait while product data is loading and form is setted
   * _.isEmpty(form) ||
   */
  if (
    _.isEmpty(form) ||
    !arrPortals ||
    (portalAccount &&
      parseInt(routeParams.portalAccountId, 10) !== portalAccount.id &&
      routeParams.portalAccountId !== 'new')
  ) {
    return <FuseLoading />;
  }

  return (
    <FormProvider {...methods}>
      <Root
        header={<PortalAccountHeader />}
        contentToolbar={
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            classes={{ root: 'w-full h-64' }}
          >
            <Tab className="h-64" label="Info" />
          </Tabs>
        }
        content={
          <div className="p-16 sm:p-24 max-w-2xl">
            <div className={tabValue !== 0 ? 'hidden' : ''}>
              <BasicInfoTab />
            </div>
          </div>
        }
        innerScroll
      />
    </FormProvider>
  );
}

export default withReducer('main', reducer)(PortalAccount);
