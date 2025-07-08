import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form``;

const LoginForm = () => {
  return (
    <StyledForm>
      <input type="text" name="email" placeholder="이메일" />
      <input type="password" name="password" placeholder="비밀번호" />
    </StyledForm>
  );
};

export default React.memo(LoginForm);
