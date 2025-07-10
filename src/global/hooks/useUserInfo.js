import { useContext } from 'react';
import CommonContext from '../contexts/CommonContext';

export default function useUserInfo() {
  const {
    state: { isLogin, loggeddMember },
  } = useContext(CommonContext);

  return [isLogin, loggeddMember];
}
