import React from 'react';
import styled from 'styled-components';

import defaultTheme from 'utils/token';

// TODO: Its may to get rid of children? It suffice to use <span>*</span>
const StyledAsterisk = styled.span<{ filled: boolean }>`
  font-weight: ${({ theme }) => theme.jajiga.fontWeightBold};
  color: ${({ theme, filled }) =>
    !filled ? theme.jajiga.colorTextError : theme.jajiga.colorFormLabelFilled};
  font-size: ${({ theme }) => theme.jajiga.fontSizeFormLabel};
  vertical-align: top;
`;
StyledAsterisk.defaultProps = {
  theme: defaultTheme,
};

const StyledFormLabel = styled(({ className, children, filled, required, id }) => (
  <span className={className} id={id}>
    {required && (
      <StyledAsterisk aria-hidden="true" filled={filled}>
        *
      </StyledAsterisk>
    )}
    <span>{children}</span>
  </span>
))`
  display: block;
  font-size: ${({ theme }) => theme.jajiga.fontSizeFormLabel};
  color: ${({ theme, filled, disabled }) =>
    !filled || disabled ? theme.jajiga.colorFormLabel : theme.jajiga.colorFormLabelFilled};
  line-height: ${({ theme }) => theme.jajiga.lineHeightText};
  margin-bottom: ${({ theme }) => theme.jajiga.spaceXXSmall};
`;

StyledFormLabel.defaultProps = {
  theme: defaultTheme,
};

const FormLabel = ({
  filled = false,
  required = false,
  disabled = false,
  children,
  id,
}: FormLabelProps) => {
  return (
    <StyledFormLabel id={id} filled={filled} disabled={disabled} required={required}>
      {children}
    </StyledFormLabel>
  );
};

FormLabel.defaultProps = {
  theme: defaultTheme,
};

export default FormLabel;
