import React, { useState, useCallback } from 'react';
import Canvas from '../components/Canvas';
import Direction from '../components/Direction';
import Result from '../components/Result';
import { getRandomCategory } from '../global/categories';

const DrawContainer = () => {
  const [category, setCategory] = useState(() => getRandomCategory());
  const [canvas, setCanvas] = useState();

  // 캔버스에 그리기 처리
  const drawCanvas = useCallback((el) => {
    const ctx = el.getContext('2d');
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';

    setCanvas(el);

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

  /**
   * 캔버스에 그려진 이미지를 jpeg  dataURL -> blob로 변환
   * 서버로 전송
   */
  const onConfirmDrawing = useCallback(() => {
    const apiHost = process.env.REACT_APP_API_URL;

    canvas.toBlob(
      (blob) => {
        const formData = new FormData();
        formData.append('image', blob);

        fetch(`${apiHost}/quickdraw/predict`, {
          method: 'POST',
          body: formData,
        })
          .then((res) => res.json())
          .then((items) => {
            console.log('items', items);
          });
      },
      'image/jpeg',
      1,
    );
  }, [canvas]);

  return (
    <>
      <Direction category={category} />
      <Canvas callback={drawCanvas} />
      <Result onClick={onConfirmDrawing} />
    </>
  );
};

export default React.memo(DrawContainer);
