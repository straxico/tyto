import React from 'react';
import styled, { css } from 'styled-components';
import media from 'utils/mediaQuery';

const StyledBackDrop = styled.div`
    background-color: #ffffff;
    border-radius: 16px 16px 0px 0px;
    margin: 32px 0px 0px;
    width: calc(100% - 4px);
    padding: 16px 16px 0px;
    margin-left: auto;
    margin-right: auto;
    max-width: 640px;
    ${media.tablet(css`
      max-width: 1120px;
      width: calc(100% - 32px);
    `)}
    ${media.desktop(css`
      max-width: 1120px;
    `)}
    ${media.largeDesktop(css`
      max-width: 1120px;
    `)}
    `;

const BackDrop = ({ children }) => {
  return <StyledBackDrop>{children}</StyledBackDrop>;
};
export default BackDrop;
