import {useEffect, useState} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useDispatch, useSelector} from 'react-redux';
import {deleteToken} from '../../../store/token/tokenAction';
import {useAuth} from '../../../hooks/useAuth';
import Spinner from '../../../UI/Spinner/Spinner';
import {useNavigate} from 'react-router';

export const Auth = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [auth, loading, clearAuth] = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(state => state.token.token);

  const toggleShowLogout = () => {
    setShowLogout(!showLogout);
  };

  const logOut = () => {
    dispatch(deleteToken());
    clearAuth();
    toggleShowLogout();
  };

  useEffect(() => {
    navigate('/');
  }, [token]);

  return (
    <div className={style.container}>
      {loading ? (
        <Spinner/>
        ) : auth.name ?
      <button className={style.btn} onClick={toggleShowLogout}>
        <img
          className={style.img}
          src={auth.img}
          title={auth.name}
          alt={`Аватар ${auth.name}`} />
      </button> : (
        <Text As='a' className={style.authLink} href={urlAuth} >
          <LoginIcon className={style.svg}/>
        </Text>
        )}
      {showLogout ?
      <button onClick={logOut} className={style.logout}> Выйти </button> :
      null}
    </div>
  );
};
Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};

