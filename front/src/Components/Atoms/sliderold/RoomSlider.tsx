import React from 'react';
import Flickity from 'react-flickity-component';

import 'flickity/css/flickity.css';

const RoomSlider = props => {
  return (
    <Flickity
      options={{ rightToLeft: true, contain: true, groupCells: true }}
      static
      reloadOnUpdate
      disableImagesLoaded>
      {props.children}
    </Flickity>
  );
};

export default RoomSlider;
