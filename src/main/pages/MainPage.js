import React from 'react';
import styled from 'styled-components';
import mainImage from '../../global/images/main.png';

const Wrapper = styled.div`
  position: absolute;
  height: calc(100% - 190px);
  width: 100%;
  top: 90px;
  left: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const MainPage = () => {
  return (
    <Wrapper className="layout-width">
      <img src={mainImage} alt="메인이미지" />
    </Wrapper>
  );
};

export default React.memo(MainPage);
