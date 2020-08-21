import React, { useEffect, Ref } from 'react';
import styled from 'styled-components';

import { rtlSpacing } from 'utils/rtl';
import defaultTheme from 'utils/token';
import { StyledTag } from '../../Tag';

const StyledInputTags = styled.div`
  position: relative;
  margin: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.jajiga.spaceSmall}`)};
  display: flex;
  align-items: center;
  flex: 0 1 auto;
  height: 100%;
  z-index: 2;
  min-width: 50px;
  overflow: hidden;
`;

StyledInputTags.defaultProps = {
  theme: defaultTheme,
};

const StyledInputTagsInner = styled.div`
  overflow-x: scroll;
  white-space: nowrap;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
  
  &::-webkit-scrollbar { 
    display: none; 
  }
  
  ${StyledTag} + ${StyledTag} {
    margin: ${({ theme }) => rtlSpacing(`0 0 0 ${theme.jajiga.spaceXSmall}`)};
  }
`;

StyledInputTagsInner.defaultProps = {
  theme: defaultTheme,
};

const InputTags = ({ children }: InputTagProps) => {
  const tagsRef = React.createRef<HTMLDivElement & { isDragging: boolean }>();

  useEffect(() => {
    const handleMouseMove = (event: { movementX: number }) => {
      if (tagsRef && tagsRef.current) {
        const { isDragging } = tagsRef.current;
        if (isDragging && event.movementX) {
          tagsRef.current.scrollLeft -= event.movementX;
        }
      }
    };

    const handleMouseUp = () => {
      if (tagsRef && tagsRef.current) {
        tagsRef.current.isDragging = false;
      }
    };

    if (tagsRef && tagsRef.current) {
      tagsRef.current.addEventListener('mousemove', handleMouseMove);
      tagsRef.current.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      const tagsNode = tagsRef.current;
      if (tagsNode) {
        tagsNode.removeEventListener('mousemove', handleMouseMove);
        tagsNode.removeEventListener('mouseup', handleMouseUp);
      }
    };
  }, [tagsRef]);

  return (
    <StyledInputTags>
      <StyledInputTagsInner
        ref={tagsRef}
        onMouseDown={() => {
          if (tagsRef && tagsRef.current) {
            tagsRef.current.isDragging = true;
          }
        }}>
        {children}
      </StyledInputTagsInner>
    </StyledInputTags>
  );
};

export default InputTags;
