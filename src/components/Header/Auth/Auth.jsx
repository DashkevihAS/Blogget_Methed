import {useState, useContext} from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';


export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const [showLogout, setShowLogout] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

  const toggleShowLogout = () => {
    setShowLogout(!showLogout);
  };

  const logOut = () => {
    delToken();
    clearAuth();
    toggleShowLogout();
  };

  return (
    <div className={style.container}>
      {auth.name ?
      <button className={style.btn} onClick={toggleShowLogout}>
        <img
          className={style.img}
          src={auth.img}
          title={auth.name}
          alt={`Аватар ${auth.name}`} />
      </button> : (
        <Text className={style.authLink} As='a' href={urlAuth} >
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

