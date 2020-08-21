import React, { FunctionComponent, Children } from 'react';
import classNames from 'classnames';
import styled from 'styled-components';

const StyledInputGroup = styled.div`
  &.input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;

    .input-group-prepend {
      margin-right: -1px;
    }

    .input-group-append,
    .input-group-prepend {
      display: flex;
    }

    .input-group-append .btn {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    .form-group,
    .btn {
      position: relative;
      flex: 1 1 auto;
      width: 1%;
      margin-bottom: 0;
      margin-left: -1px;
    }
    .form-group:not(:first-child) .form-control {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .form-group:not(:last-child) .form-control {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;

interface InputGroupAppendProps {
  children: React.ReactNode;
}
interface InputGroupComposition {
  Append?: React.FC<InputGroupAppendProps>;
}
interface InputGroupProps {
  size?: 'lg' | 'sm';
  className?: string;
}

const InputGroup: React.FC<InputGroupProps> & InputGroupComposition = ({
  size,
  className,
  children,
}) => {
  const prefix = 'input-group';
  const classes = classNames(className, prefix, size && `${prefix}-${size}`);

  return (
    <>
      <StyledInputGroup className={classes}>{children}</StyledInputGroup>
    </>
  );
};
const InputGroupAppend: React.FC<InputGroupAppendProps> = props => (
  <div className="input-group-append">{props.children}</div>
);

InputGroup.Append = InputGroupAppend;

export default InputGroup;
