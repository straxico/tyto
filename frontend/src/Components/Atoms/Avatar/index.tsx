import React from 'react';
import styled from 'styled-components';
import defaultTheme from 'utils/token';
import SIZE_OPTIONS from 'Atoms/Avatar/const';

const getSize: AvatarGetSize = ({ size, theme }) => {
  const tokens = {
    [SIZE_OPTIONS.SIZE_NORMAL]: theme.jajiga.avatarSizeNormal,
    [SIZE_OPTIONS.SIZE_SMALL]: theme.jajiga.avatarSizeSmall,
  };

  return tokens[size];
};

const StyledAvatar = styled.img<{ size: AvatarSize }>`
  width: ${getSize};
  height: ${getSize};
  position: absolute;
  border-radius: ${({ theme }) => theme.jajiga.borderRadiusCircle};
  border: 2px solid #fff;
  background-color: ${({ theme }) => theme.jajiga.backgroundAvatar};
  box-sizing: border-box;
  overflow: hidden;
  z-index: 1;
`;

StyledAvatar.defaultProps = {
  theme: defaultTheme,
};

const Avatar = ({ src, alt, size = 'normal' }: AvatarProps) => {
  return <StyledAvatar src={src} size={size} alt={alt} />;
};
export default Avatar;
