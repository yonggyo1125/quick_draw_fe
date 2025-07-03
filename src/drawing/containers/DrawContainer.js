import React from 'react';
import Canvas from '../components/Canvas';
import Direction from '../components/Direction';
import Result from '../components/Result';

const DrawContainer = () => {
  return (
    <>
      <Direction />
      <Canvas />
      <Result />
    </>
  );
};

export default React.memo(DrawContainer);
