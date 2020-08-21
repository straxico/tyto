import React, { ReactChild } from 'react';
import styled from 'styled-components';

type CardOldProps = {
  children: any;
};

const StyledCard = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
  background-color: #ccc;
  background-size: cover;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.3);
  :hover {
    box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.4);
  }
`;

const Card = ({ children }: CardOldProps) => <StyledCard>{children}</StyledCard>;

export default Card;
