import LoadingButton from '@mui/lab/LoadingButton';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import axios from 'axios';
import { useState } from 'react';

const Root = styled('div')(({ theme }) => ({
  '& .PricingStyle1Page-header': {
    height: 500,
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    color: theme.palette.primary.contrastText,
  },
}));

function Purchase() {
  const [isLoadingProduct1, setIsLoadingProduct1] = useState(false);
  const [isLoadingProduct2, setIsLoadingProduct2] = useState(false);
  const [isLoadingProduct3, setIsLoadingProduct3] = useState(false);

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };

  const buttonPersonOnClick = (productId) => {
    if (productId === 1) {
      setIsLoadingProduct1(true);
    } else if (productId === 2) {
      setIsLoadingProduct2(true);
    } else if (productId === 3) {
      setIsLoadingProduct3(true);
    }
    axios
      .post('/api/Purchase/PurchaseService', {
        productId,
        discountCode: null,
        paymentCycleId: 1,
      })
      .then((response) => {
        const { data } = response;
        if (data.paymentUrl) {
          window.location.href = data.paymentUrl;
          return null;
        }
        return null;
      });
  };

  return (
    <Root className="w-full">
      <div className="PricingStyle1Page-header flex">
        <div className="p-24 w-full max-w-2xl mx-auto">
          <div className="text-center my-56 mx-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            >
              <Typography color="inherit" className="font-bold text-32 md:text-52">
                Nuestros Planes
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
            >
              <Typography color="inherit" className="text-16 opacity-75 mt-16 mx-auto max-w-512">
                Tenemos precios convenientes según tu necesidad. Te damos 2 meses gratis si elijes
                el pago anual.
              </Typography>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="-mt-192">
        <div className="w-full max-w-2xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex items-center justify-center flex-wrap"
          >
            <motion.div variants={item} className="w-full max-w-320 sm:w-1/3 p-12">
              <Card className="rounded-16">
                <div className={clsx('px-24 py-16')}>
                  <Typography variant="subtitle1" className="font-medium">
                    PERSONA
                  </Typography>
                  <Typography variant="caption" color="inherit" className="font-normal">
                    Por inauguración! (Después $5.000)
                  </Typography>
                </div>

                <CardContent className="p-32">
                  <div className="flex justify-center">
                    <Typography variant="h5" color="textSecondary">
                      $
                    </Typography>
                    <div className="flex items-end">
                      <Typography className="text-52 mx-4 tracking-tight font-semibold leading-none">
                        3.000
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary" className="font-normal">
                        / mes
                      </Typography>
                    </div>
                  </div>

                  <Divider className="my-32" />

                  <div className="flex flex-col">
                    <Typography variant="subtitle1" className="">
                      Todas las autopistas de RM
                    </Typography>
                    <Typography variant="subtitle1" className="">
                      Respaldo de boletas y facturas
                    </Typography>
                    <Typography variant="subtitle1" className="">
                      Datos de hasta 3 vehículos
                    </Typography>
                  </div>
                </CardContent>

                <div className="flex justify-center pb-32">
                  <LoadingButton
                    variant="outlined"
                    className="w-128"
                    loading={isLoadingProduct1}
                    disabled={isLoadingProduct1 || isLoadingProduct2 || isLoadingProduct3}
                    onClick={() => {
                      buttonPersonOnClick(1);
                    }}
                  >
                    Comprar Ahora
                  </LoadingButton>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={item} className="w-full max-w-320 sm:w-1/3 p-12">
              <Card className="rounded-16">
                <div className={clsx('px-24 py-16')}>
                  <Typography variant="subtitle1" className="font-medium">
                    PYME
                  </Typography>
                  <Typography variant="caption" color="inherit" className="font-normal">
                    Por inauguración! (Después $20.000)
                  </Typography>
                </div>

                <CardContent className="p-32">
                  <div className="flex justify-center">
                    <Typography variant="h5" color="textSecondary">
                      $
                    </Typography>
                    <div className="flex items-end">
                      <Typography className="text-52 mx-4 tracking-tight font-semibold leading-none">
                        15.000
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary" className="font-normal">
                        / mes
                      </Typography>
                    </div>
                  </div>

                  <Divider className="my-32" />

                  <div className="flex flex-col">
                    <Typography variant="subtitle1" className="">
                      Todas las autopistas de RM
                    </Typography>
                    <Typography variant="subtitle1" className="">
                      Respaldo de boletas y facturas
                    </Typography>
                    <Typography variant="subtitle1" className="">
                      Datos de hasta 15 vehículos
                    </Typography>
                  </div>
                </CardContent>

                <div className="flex justify-center pb-32">
                  <LoadingButton
                    variant="outlined"
                    className="w-128"
                    loading={isLoadingProduct2}
                    disabled={isLoadingProduct1 || isLoadingProduct2 || isLoadingProduct3}
                    onClick={() => {
                      buttonPersonOnClick(2);
                    }}
                  >
                    Comprar Ahora
                  </LoadingButton>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={item} className="w-full max-w-320 sm:w-1/3 p-12">
              <Card className="rounded-16">
                <div className={clsx('px-24 py-16')}>
                  <Typography variant="subtitle1" className="font-medium">
                    EMPRESA
                  </Typography>
                  <Typography variant="caption" color="inherit" className="font-normal">
                    Por inauguración! (Después $600.000)
                  </Typography>
                </div>

                <CardContent className="p-32">
                  <div className="flex justify-center">
                    <Typography variant="h5" color="textSecondary" className="font-normal">
                      $
                    </Typography>
                    <div className="flex items-end">
                      <Typography className="text-40 mx-4 tracking-tight font-semibold leading-none">
                        500.000
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary" className="font-normal">
                        / mes
                      </Typography>
                    </div>
                  </div>

                  <Divider className="my-32" />

                  <div className="flex flex-col">
                    <Typography variant="subtitle1" className="">
                      Todas las autopistas de RM
                    </Typography>
                    <Typography variant="subtitle1" className="">
                      Respaldo de boletas y facturas
                    </Typography>
                    <Typography variant="subtitle1" className="">
                      Datos de hasta 1000 vehículos
                    </Typography>
                  </div>
                </CardContent>

                <div className="flex justify-center pb-32">
                  <LoadingButton
                    variant="outlined"
                    className="w-128"
                    loading={isLoadingProduct3}
                    disabled={isLoadingProduct1 || isLoadingProduct2 || isLoadingProduct3}
                    onClick={() => {
                      buttonPersonOnClick(1);
                    }}
                  >
                    Comprar Ahora
                  </LoadingButton>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-medium">
              Preguntas frecuentes
            </Typography>

            <div className="flex flex-wrap w-full">
              <div className="w-full sm:w-1/2 p-24">
                <Typography className="text-20 mb-8">¿Qué medios de pago tienen?</Typography>
                <Typography className="text-16" color="textSecondary">
                  Trabajamos con Flow, por lo que disponemos de los medios de pagos que ellos
                  manejan.
                </Typography>
              </div>

              <div className="w-full sm:w-1/2 p-24">
                <Typography className="text-20 mb-8">
                  ¿Puedo cancelar en cualquier momento?
                </Typography>
                <Typography className="text-16" color="textSecondary">
                  Si, no hay ningún compromiso de pago.
                </Typography>
              </div>

              <div className="w-full sm:w-1/2 p-24">
                <Typography className="text-20 mb-8">¿Qué ocurre si dejo de pagar?</Typography>
                <Typography className="text-16" color="textSecondary">
                  Si dejas de pagar tu cuenta se convertirá en cuenta demo al terminar el periodo
                  pagado. Tus datos y facturas serán eliminados 15 días terminar el periodo pagado.
                </Typography>
              </div>

              <div className="w-full sm:w-1/2 p-24">
                <Typography className="text-20 mb-8">¿Los precios se mantendrán?</Typography>
                <Typography className="text-16" color="textSecondary">
                  Los precios actuales son por inauguración, es posible que los subamos en los
                  próximos días para los nuevos clientes. Los clientes que ya tienen el precio de
                  inauguración mantendrán su precio recurrentemente.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}

export default Purchase;