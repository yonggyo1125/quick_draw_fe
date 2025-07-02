import React from 'react';
import mainImage from '../../global/images/main.png';

const MainPage = () => {
  return (
    <>
      <img src={mainImage} alt="메인이미지" />
    </>
  );
};

export default React.memo(MainPage);
