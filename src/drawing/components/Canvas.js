import React from 'react';
import styled from 'styled-components';
import color from '../../global/styles/color';

const { dark } = color;

const StyledCanvas = styled.canvas`
  border: 1px solid ${dark};
  margin-bottom: 15px;
  border-radius: 3px;
`;

const Canvas = () => {
  return <StyledCanvas width="498" height="498"></StyledCanvas>;
};

export default React.memo(Canvas);
