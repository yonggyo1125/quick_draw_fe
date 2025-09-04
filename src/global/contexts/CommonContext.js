import { createContext, useState, useEffect } from 'react';
import cookie from 'react-cookies';
import useFetch from '../hooks/useFetch';

const CommonContext = createContext({});

const CommonProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [loggedMember, setLoggedMember] = useState({});
  const fetchCSR = useFetch();

  useEffect(() => {
    const token = cookie.load('token');
    if (token && !loggedMember.email) {
      (async () => {
        const res = await fetchCSR('/member');
        if (res.ok) {
          // 토큰이 유효한 경우
          setLoggedMember(await res.json());
          setIsLogin(true);
          return;
        }

        // 토큰이 만료된 경우 쿠키에서 토큰 삭제
        cookie.remove('token');
        setLoggedMember({});
        setIsLogin(false);
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loggedMember?.email]);

  const value = {
    state: { isLogin, loggedMember },
    actions: { setIsLogin, setLoggedMember },
  };

  return (
    <CommonContext.Provider value={value}>{children}</CommonContext.Provider>
  );
};

const { Consumer: CommonConsumer } = CommonContext;

export { CommonProvider, CommonConsumer };

export default CommonContext;
