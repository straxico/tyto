/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import './slick.css';
// import Arrow from 'Atoms/svg/arrow';

const SlideBar = props => {
  return <Slider {...props.settings}>{props.children}</Slider>;
};
export default SlideBar;
