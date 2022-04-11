import FuseLoading from '@fuse/core/FuseLoading';
import { useDeepCompareEffect } from '@fuse/hooks';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { confirmEmail } from 'app/auth/store/registerSlice';

function ConfirmEmail() {
  const dispatch = useDispatch();
  const routeParams = useParams();
  useDeepCompareEffect(() => {
    const { token } = routeParams;
    dispatch(confirmEmail({ token }));
  }, [dispatch, routeParams]);
  return <FuseLoading />;
}
export default ConfirmEmail;
