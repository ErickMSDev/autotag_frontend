import FuseLoading from '@fuse/core/FuseLoading';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';

function ConfirmEmail() {
  const routeParams = useParams();

  useEffect(() => {
    const { token } = routeParams;

    console.log('entró a effect');

    const intervalGateway = setInterval(() => {
      axios
        .post('/api/Gateway/FlowGetStatus', {
          token,
        })
        .then((response) => {
          const { data } = response;
          if (data.transitionStateCode && data.accountRoleCode) {
            if (data.transitionStateCode === 'pending') {
              return null;
            }
            if (data.transitionStateCode === 'declined') {
              console.error(data.transitionStateCode);
              clearInterval(intervalGateway);
              window.location.href = '/';
              return null;
            }
            if (data.transitionStateCode === 'canceled') {
              console.error(data.transitionStateCode);
              clearInterval(intervalGateway);
              window.location.href = '/';
              return null;
            }
            if (data.accountRoleCode === 'demo') {
              console.log(data.accountRoleCode);
              return null;
            }
            window.location.href = '/';
            return null;
          }
          console.error(data);
          clearInterval(intervalGateway);
          return null;
        });
    }, 3000);
  }, [routeParams]);
  return <FuseLoading />;
}

export default ConfirmEmail;
