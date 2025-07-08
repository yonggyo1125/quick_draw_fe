import React, { useState, useCallback } from 'react';
import LoginForm from '../components/LoginForm';

const LoginContainer = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }));
  }, []);

  const onSubmit = useCallback((e) => {
    e.preventDefault();

    // 필수 항목 검증 S

    // 필수 항목 검증 E
  }, []);

  return <LoginForm form={form} onChange={onChange} onSubmit={onSubmit} />;
};

export default React.memo(LoginContainer);
