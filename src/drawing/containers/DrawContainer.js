import React, { useState, useCallback } from 'react';
import Canvas from '../components/Canvas';
import Direction from '../components/Direction';
import Result from '../components/Result';
import { getRandomCategory } from '../global/categories';

const DrawContainer = () => {
  const [category, setCategory] = useState(() => getRandomCategory());

  // 캔버스에 그리기 처리
  const drawCanvas = useCallback((el) => {
    const ctx = el.getContext('2d');

    let isDraw = false; // 선을 그릴 수 없음
    el.addEventListener('mousedown', (e) => {
      ctx.beginPath();
      ctx.moveTo(e.offsetX, e.offsetY);

      isDraw = true; // 마우스를 클릭하면 선을 그릴 수 있음
    });

    el.addEventListener('mousemove', (e) => {
      if (!isDraw) return;

      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    });

    el.addEventListener('mouseup', () => {
      isDraw = false; // 마우스 버튼을 떼면 선을 그릴 수 없음
    });
  }, []);

  return (
    <>
      <Direction category={category} />
      <Canvas callback={drawCanvas} />
      <Result />
    </>
  );
};

export default React.memo(DrawContainer);
