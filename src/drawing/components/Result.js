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

const PredictionBox = ({ items, eq, category }) => {};

export default React.memo(Result);
