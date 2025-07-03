import React, { useState, useCallback } from 'react';
import Canvas from '../components/Canvas';
import Direction from '../components/Direction';
import Result from '../components/Result';
import { getRandomCategory } from '../global/categories';

const DrawContainer = () => {
  const [category, setCategory] = useState(() => getRandomCategory());
  return (
    <>
      <Direction category={category} />
      <Canvas />
      <Result />
    </>
  );
};

export default React.memo(DrawContainer);
