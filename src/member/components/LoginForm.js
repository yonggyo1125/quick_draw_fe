import React from 'react';
import styled from 'styled-components';
import { MediumButton } from '../../global/components/Buttons';
import color from '../../global/styles/color';
import fontsize from '../../global/styles/fontsize';
const { dark } = color;
const { medium } = fontsize;

const StyledForm = styled.form`
  min-width: 280px;
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  margin-top: calc(50% - 150px);

  input {
    border: 1px solid ${dark};
    width: 100%;
    height: 55px;
    display: block;
    font-size: ${medium};
    text-align: center;
  }

  input + input {
    margin-top: 10px;
  }

  button {
    margin-top: 20px;
  }
`;

const LoginForm = () => {
  return (
    <StyledForm>
      <input type="text" name="email" placeholder="이메일" />
      <input type="password" name="password" placeholder="비밀번호" />
      <MediumButton type="submit" width="100%">
        로그인
      </MediumButton>
    </StyledForm>
  );
};

export default React.memo(LoginForm);
