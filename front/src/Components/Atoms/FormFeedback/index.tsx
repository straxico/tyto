import React from 'react';
import styled from 'styled-components';
import defaultTheme from 'utils/token';
import TYPE_OPTIONS from './consts';

export const StyledFormFeedback = styled(({ theme, type, ...props }) => <div {...props} />)`
  color: ${({ theme, type }) =>
    type === TYPE_OPTIONS.ERROR ? theme.jajiga.colorTextError : theme.jajiga.colorTextSecondary};
  font-size: ${({ theme }) => theme.jajiga.fontSizeFormFeedback};
  font-weight: ${({ theme, type }) =>
    type === TYPE_OPTIONS.ERROR ? theme.jajiga.fontWeightMedium : theme.jajiga.fontWeightNormal};
  line-height: ${({ theme }) => theme.jajiga.lineHeightText};
  width: 100%;
  margin-top: 2px;
  position: relative;
  top: 100%;
  max-height: ${({ theme }) =>
    Math.floor(theme.jajiga.lineHeightText * parseInt(theme.jajiga.fontSizeFormFeedback, 10))}px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  & a {
    color: ${({ theme, type }) =>
      type === TYPE_OPTIONS.ERROR ? theme.jajiga.colorTextError : theme.jajiga.colorTextAttention};
    font-weight: ${({ theme }) => theme.jajiga.fontWeightMedium};
    text-decoration: underline;
    cursor: pointer;
  }

  strong,
  b {
    font-weight: ${({ theme }) => theme.fontWeightMedium};
    color: ${({ theme }) => theme.paletteInkNormal};
  }
`;

StyledFormFeedback.defaultProps = {
  theme: defaultTheme,
};

const FormFeedback = (props: FormFeedbackProps) => {
  const { children, type = TYPE_OPTIONS.HELP, dataTest } = props;
  return (
    <StyledFormFeedback type={type} data-test={dataTest}>
      {children}
    </StyledFormFeedback>
  );
};

export default FormFeedback;
