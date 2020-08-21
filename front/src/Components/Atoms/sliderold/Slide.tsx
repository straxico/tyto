import React from 'react';

const Slide = (props: { style: React.CSSProperties; children: React.ReactNode }) => {
  return (
    <div className="slide" style={props.style}>
      {props.children}
    </div>
  );
};

export default Slide;
