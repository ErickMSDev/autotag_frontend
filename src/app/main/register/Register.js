import Card from '@mui/material/Card';
import { styled, darken } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Auth0RegisterTab from './tabs/Auth0RegisterTab';
import FirebaseRegisterTab from './tabs/FirebaseRegisterTab';
import JWTRegisterTab from './tabs/JWTRegisterTab';

const Root = styled('div')(({ theme }) => ({
  background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
    theme.palette.primary.dark,
    0.5
  )} 100%)`,
  color: theme.palette.primary.contrastText,

  '& .Register-leftSection': {},

  '& .Register-rightSection': {
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${darken(
      theme.palette.primary.dark,
      0.5
    )} 100%)`,
    color: theme.palette.primary.contrastText,
  },
}));

function Register() {
  const [selectedTab, setSelectedTab] = useState(0);

  function handleTabChange(event, value) {
    setSelectedTab(value);
  }

  return (
    <Root className="flex flex-col flex-auto items-center justify-center shrink-0 p-16 md:p-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex w-full max-w-400 md:max-w-3xl rounded-20 shadow-2xl overflow-hidden"
      >
        <Card
          className="Register-leftSection flex flex-col w-full max-w-sm items-center justify-center shadow-0"
          square
        >
          <CardContent className="flex flex-col items-center justify-center w-full py-91 max-w-320">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.2 } }}
            >
              <div className="flex items-center justif-center mb-32">
                <img
                  className="logo-icon w-96"
                  src="assets/images/logos/logo-viasimple.svg"
                  alt="logo"
                />
              </div>
            </motion.div>

            {/* <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              variant="fullWidth"
              className="w-full mb-32"
            >
              <Tab
                icon={
                  <img
                    className="h-40 p-4 bg-black rounded-12"
                    src="assets/images/logos/jwt.svg"
                    alt="firebase"
                  />
                }
                className="min-w-0"
                label="JWT"
              />
              <Tab
                icon={
                  <img className="h-40" src="assets/images/logos/firebase.svg" alt="firebase" />
                }
                className="min-w-0"
                label="Firebase"
              />
              <Tab
                icon={<img className="h-40" src="assets/images/logos/auth0.svg" alt="auth0" />}
                className="min-w-0"
                label="Auth0"
              />
            </Tabs> */}

            {selectedTab === 0 && <JWTRegisterTab />}
            {selectedTab === 1 && <FirebaseRegisterTab />}
            {selectedTab === 2 && <Auth0RegisterTab />}
          </CardContent>

          <div className="flex flex-col items-center justify-center pb-32">
            <div>
              <span className="font-normal mr-8">¿Ya tienes una cuenta?</span>
              <Link className="font-normal" to="/login">
                Ingresa acá
              </Link>
            </div>
          </div>
        </Card>

        <div className="Register-rightSection hidden md:flex flex-1 items-center justify-center p-64">
          <div className="max-w-320">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            >
              <Typography variant="h3" color="inherit" className="font-semibold leading-tight">
                Bienvenid@ a
                <br /> ViaSimple!
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
            >
              <Typography variant="subtitle1" color="inherit" className="mt-32">
                Un útil y moderno sistema que te permite gestionar, analizar y respaldar tus
                transitos y documentos de autopistas.
              </Typography>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Root>
  );
}

export default Register;
