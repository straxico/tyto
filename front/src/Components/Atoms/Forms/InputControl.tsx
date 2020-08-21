import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import css from 'styled-jsx/css';

const styles = css.global`
  .form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #484848;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.2rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &.form-control-sm {
      height: calc(1.75rem + 0.5rem + 2px);
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
      line-height: 1.5;
      border-radius: 0.2rem;
    }
    &.form-control-lg {
      height: calc(1.5rem + 1rem + 2px);
      padding: 0.5rem 1rem;
      font-size: 0.875rem; /* 14px * 1rem / 16px */
      line-height: 1.5rem;
      border-radius: 0.25rem;
    }

    &.has-icon {
      padding-right: 1.875rem;
    }
  }
  i.icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.25rem;
    width: 1.25rem;
    height: 1.5rem;
    margin: auto;
    color: #767676;
  }
`;

const InputControl = ({
  value,
  setValue,
  type = 'text',
  placeholder,
  className,
  size,
  icon,
  children,
}: inputControlType) => {
  const prefix = 'form-control';
  const classes = classNames(className, prefix, size && `${prefix}-${size}`, icon && 'has-icon');

  return (
    <>
      <style jsx>{styles}</style>
      {icon && <i className={`icon icon_${icon}`} />}
      {/* <i className="icon icon_mapmarker" /> */}
      {!children ? (
        <input
          placeholder={placeholder || `Enter ${type}`}
          type={type}
          className={classes}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      ) : (
        <div className={classes}>{children}</div>
      )}
    </>
  );
};
export default InputControl;
