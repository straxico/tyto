import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import css from 'styled-jsx/css';

const SelectControl = ({
  value,
  setValue,
  list,
  placeholder = 'انتخاب کنید',
  className,
  size,
  icon,
  disabled,
}: selectControlType) => {
  const prefix = 'form-control';
  const classes = classNames(className, prefix, size && `${prefix}-${size}`, icon && 'has-icon');
  return (
    <>
      {/* <style jsx>{styles}</style> */}
      {icon && <i className={`icon icon_${icon}`} />}
      <select
        className={classes}
        name="ctid"
        value={value}
        onChange={e => setValue(e.target.value)}>
        {disabled && (
          <option disabled={disabled} value={0}>
            {placeholder}
          </option>
        )}
        {list.length &&
          list.map(e => (
            <option key={e.id} value={e.id} disabled={e.active !== 1}>
              {e.name}
            </option>
          ))}
      </select>
    </>
  );
};
export default SelectControl;
