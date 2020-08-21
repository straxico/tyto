import React from 'react';
import css from 'styled-jsx/css';

const styles = css`
  select {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 14px;
    color: #484848;
    background-color: transparent;
    font-family: inherit;
  }

  option {
    background-color: #fff;
    color: #484848;
    font-size: 14px;
  }
  i {
    position: absolute;
    top: 50%;
    right: 5px;
    margin-top: -10px;
  }
  .select_field {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 30px 0 2px;
    box-sizing: border-box;
  }
`;

const Select = ({ value, setValue, disabled, list, icon }: selectType) => (
  // you should pass cityList as array , value and setValue as useState to this component
  <>
    <div className="select_field">
      <style jsx>{styles}</style>
      {icon && <i className={`icon ${icon}`} />}
      <select className="city" name="ctid" value={value} onChange={e => setValue(e.target.value)}>
        {disabled && (
          <option disabled={disabled} value={0}>
            انتخاب کنید
          </option>
        )}
        {list.map((e: { id: string | number; name: React.ReactNode }) => (
          <option key={e.id} value={e.id}>
            {e.name}
          </option>
        ))}
      </select>
    </div>
  </>
);

export default Select;
