import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Icon from '@mui/material/Icon';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

function ForgotPasswordEmail() {
  const routeParams = useParams();
  const { email } = routeParams;
  return (
    <div className="flex flex-col flex-auto items-center justify-center p-16 sm:p-32">
      <div className="flex flex-col items-center justify-center w-full">
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
          <Card className="w-full max-w-384">
            <CardContent className="flex flex-col items-center justify-center p-16 sm:p-24 md:p-32">
              <div className="m-32">
                <Icon className="text-96" color="action">
                  email
                </Icon>
              </div>

              <Typography variant="h5" className="text-center mb-16 font-semibold">
                ¡Revisa tu correo!
              </Typography>

              <Typography className="text-center mb-16 w-full" color="textSecondary">
                Se ha enviado un correo a <b>{email}</b>.
              </Typography>

              <Typography className="text-center w-full" color="textSecondary">
                Revisa tu bandeja de entrada y haz clic en el enlace "Crear nueva contraseña" para
                cambiar tu contraseña.
              </Typography>

              <div className="flex flex-col items-center justify-center pt-32 pb-24">
                <Link className="font-normal" to="/sign-in">
                  Volver a iniciar sesión
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default ForgotPasswordEmail;
