import { useContext } from 'react';
import CommonContext from '../contexts/CommonContext';
import cookie from 'react-cookies';

export default function useLogout() {
  const {
    actions: { setIsLogin, setLoggedMember },
  } = useContext(CommonContext);
  return () => {
    setIsLogin(false);
    setLoggedMember(null);
    cookie.remove('token');
  };
}
