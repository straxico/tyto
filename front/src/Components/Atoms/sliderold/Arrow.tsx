import React from 'react';

function Capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Arrow = props => (
  <button
    type="button"
    className={`${props.type}-button ${props.show == true ? '' : 'hide'}`}
    aria-label={Capitalize(props.type)}
    onClick={props.goTo}>
    <svg viewBox="0 0 100 100">
      <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow" />
    </svg>
  </button>
);

export default Arrow;
