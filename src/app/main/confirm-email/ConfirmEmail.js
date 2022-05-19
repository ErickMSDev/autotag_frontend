import FuseLoading from '@fuse/core/FuseLoading';
import { useDeepCompareEffect } from '@fuse/hooks';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwtService from '../../auth/services/jwtService';

function ConfirmEmail() {
  const dispatch = useDispatch();
  const routeParams = useParams();
  useDeepCompareEffect(() => {
    const { token } = routeParams;
    jwtService
      .confirmEmail({ token })
      .then((user) => {})
      .catch((_errors) => {
        console.error(_errors);
      });
  }, [dispatch, routeParams]);
  return <FuseLoading />;
}
export default ConfirmEmail;
