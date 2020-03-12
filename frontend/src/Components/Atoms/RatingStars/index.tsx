import React from 'react';
import styled from 'styled-components';

import Icon from 'Atoms/Icon';
import defaultTheme from 'utils/token';
import MAX_STARS from './consts';
import { ICON_COLORS, ICON_SIZES } from '../Icon/consts';

const StyledRatingStars = styled.div<{ size }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-shrink: 0;

  svg {
    flex-shrink: 0;
  }
`;

StyledRatingStars.defaultProps = {
  theme: defaultTheme,
};

const RatingStars = ({
  rating,
  size = ICON_SIZES.SMALL as IconSize,
  dataTest,
  color = ICON_COLORS.PRIMARY as IconColor,
  showEmpty = false,
}: RatingStarProps) => {
  const ratingRounded = Math.round(rating);
  const starsCount = showEmpty ? MAX_STARS : ratingRounded;
  return (
    <StyledRatingStars data-test={dataTest} size={size} aria-label="star">
      {Array(...Array(starsCount)).map((_, index) => {
        const key = `star-${index}`;
        return index <= ratingRounded - 1 ? (
          <Icon className="star" key={key} size={size} color={color} />
        ) : (
          <Icon className="starhalf" key={key} size={size} color={color} />
        );
      })}
    </StyledRatingStars>
  );
};

export default RatingStars;
