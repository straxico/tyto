import React from 'react';

const Arrow = props => (
  <>
    <svg className="slick-prev" viewBox="0 0 100 100">
      <path
        d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z"
        className="arrow"
        transform={props.right && 'translate(100, 100) rotate(180)'}
      />
    </svg>
  </>
);

export default Arrow;
