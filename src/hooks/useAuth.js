import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {authLogout} from '../store/auth/authAction';
import {authRequestAsync} from '../store/auth/authAction';

export const useAuth = () => {
  const auth = useSelector(state => state.auth.data);
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  const clearAuth = () => dispatch(authLogout());
  return [auth, loading, clearAuth];
};
