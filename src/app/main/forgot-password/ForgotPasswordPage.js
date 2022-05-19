import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import withRouter from '@fuse/core/withRouter';
import { useState } from 'react';
import * as yup from 'yup';
import _ from '@lodash';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import jwtService from '../../auth/services/jwtService';

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  email: yup.string().email('You must enter a valid email').required('You must enter a email'),
});

const defaultValues = {
  email: '',
};

function ForgotPasswordPage({ navigate }) {
  const { control, formState, handleSubmit, setError } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const { isValid, dirtyFields, errors } = formState;

  function onSubmit({ email }) {
    setIsLoading(true);
    jwtService
      .recoverPassword(email)
      .then((user) => {
        navigate({
          pathname: `/forgot-password-email/${email}`,
        });
      })
      .catch((_errors) => {
        _errors.forEach((error) => {
          setError(error.type, {
            type: 'manual',
            message: error.message,
          });
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <div className="flex flex-col flex-auto items-center sm:justify-center min-w-0 md:p-32">
      <Paper className="flex w-full sm:w-auto min-h-full sm:min-h-auto md:w-full md:max-w-6xl rounded-0 sm:rounded-2xl sm:shadow overflow-hidden">
        <div className="w-full sm:w-auto py-32 px-16 sm:p-48 md:p-64 ltr:border-r-1 rtl:border-l-1">
          <div className="w-full max-w-320 sm:w-320 mx-auto sm:mx-0">
            <img className="w-60" src="assets/images/logo/logo-viasimple.svg" alt="logo" />

            <Typography className="mt-32 text-4xl font-extrabold tracking-tight leading-tight">
              ¿Olvidaste tu contraseña?
            </Typography>
            <div className="flex items-baseline mt-2 font-medium">
              <Typography>Rellena el formulario para restablecer tu contraseña</Typography>
            </div>

            <form
              name="registerForm"
              noValidate
              className="flex flex-col justify-center w-full mt-32"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    className="mb-24"
                    label="Email"
                    type="email"
                    error={!!errors.email}
                    helperText={errors?.email?.message}
                    variant="outlined"
                    required
                    fullWidth
                  />
                )}
              />

              <LoadingButton
                variant="contained"
                color="secondary"
                className=" w-full mt-4"
                aria-label="Register"
                disabled={_.isEmpty(dirtyFields) || !isValid}
                type="submit"
                size="large"
                loading={isLoading}
              >
                Enviar link de recuperación
              </LoadingButton>

              <Typography className="mt-32 text-md font-medium" color="text.secondary">
                <span>Volver a</span>
                <Link className="ml-4" to="/sign-in">
                  Iniciar sesión
                </Link>
              </Typography>
            </form>
          </div>
        </div>

        <Box
          className="relative hidden md:flex flex-auto items-center justify-center h-full p-64 lg:px-112 overflow-hidden"
          sx={{ backgroundColor: 'primary.main' }}
        >
          <svg
            className="absolute inset-0 pointer-events-none"
            viewBox="0 0 960 540"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMax slice"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Box
              component="g"
              sx={{ color: 'primary.light' }}
              className="opacity-20"
              fill="none"
              stroke="currentColor"
              strokeWidth="100"
            >
              <circle r="234" cx="196" cy="23" />
              <circle r="234" cx="790" cy="491" />
            </Box>
          </svg>
          <Box
            component="svg"
            className="absolute -top-64 -right-64 opacity-20"
            sx={{ color: 'primary.light' }}
            viewBox="0 0 220 192"
            width="220px"
            height="192px"
            fill="none"
          >
            <defs>
              <pattern
                id="837c3e70-6c3a-44e6-8854-cc48c737b659"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="220" height="192" fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)" />
          </Box>

          <div className="z-10 relative w-full max-w-2xl">
            <div className="text-7xl font-bold leading-none text-gray-100">
              <div>Bienvenid@ a</div>
              <div>ViaSimple!</div>
            </div>
            <div className="mt-24 text-lg tracking-tight leading-6 text-gray-400">
              Un útil y moderno sistema que te permite gestionar, analizar y respaldar tus transitos
              y documentos de autopistas.
            </div>
            <div className="flex items-center mt-32">
              <div className="font-medium tracking-tight text-gray-400">
                Más de 200 personas se unieron a nosotros, es tu turno
              </div>
            </div>
          </div>
        </Box>
      </Paper>
    </div>
  );
}

export default withRouter(ForgotPasswordPage);
