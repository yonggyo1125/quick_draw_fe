import React from 'react';
import styled from 'styled-components';
import { MediumButton } from '../../global/components/Buttons';
import categories from '../global/categories';
import color from '../../global/styles/color';
import fontsize from '../../global/styles/fontsize';

const { success, light } = color;
const { medium } = fontsize;

const Wrapper = styled.div``;

const Result = ({ onClick, category, eq, predictions }) => {
  return (
    <Wrapper>
      <MediumButton type="button" onClick={onClick}>
        제출
      </MediumButton>

      {predictions && predictions.length > 0 && (
        <StyledPredictionBox
          items={predictions}
          eq={eq}
          category={category[1]}
        />
      )}
    </Wrapper>
  );
};

const PredictionBox = ({ items, eq, category, className }) => {
  return (
    <div className={className}>
      <div className="tit">
        {eq
          ? category + '(을)를 잘 그렸네요!'
          : '잘 모르겠어요. 혹시 그린 것이 아래 있나요?'}
      </div>
      {!eq && (
        <div className="prediction">
          {items.map((item) => (
            <span key={item[0] + '_' + item[1]}>
              {categories[item[0]]}({Math.round(item[1] * 1000) / 10}%)
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

const StyledPredictionBox = styled(PredictionBox)`
  background: ${success};
  font-size: ${medium};
  color: ${light};
  padding: 10px 20px;
  text-align: center;
  margin-top: 5px;
  border-radius: 3px;

  .tit {
    margin-bottom: 5px;
  }
`;

export default React.memo(Result);
