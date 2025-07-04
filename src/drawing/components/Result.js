import React from 'react';
import styled from 'styled-components';
import { MediumButton } from '../../global/components/Buttons';

const Wrapper = styled.div``;

const Result = ({ onClick, category, eq, predictions }) => {
  return (
    <Wrapper>
      <MediumButton type="button" onClick={onClick}>
        제출
      </MediumButton>

      {predictions && predictions.length > 0 && (
        <PredictionBox items={predictions} eq={eq} category={category[1]} />
      )}
    </Wrapper>
  );
};

const PredictionBox = ({ items, eq, category }) => {
  return (
    <div>
      <div className="tit">
        {eq
          ? category + '(을)를 잘 그렸네요!'
          : '잘 모르겠어요. 혹시 그린 것이 아래 있나요?'}
      </div>
      {!eq && (
        <div>
          {items.map((item) => (
            <span key={item[0] + '_' + item[1]}></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(Result);
