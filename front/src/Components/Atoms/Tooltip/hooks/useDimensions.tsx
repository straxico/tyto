import { useEffect, useState } from 'react';
import boundingClientRect from 'utils/boundingClientRect/index';

const useDimensions: TooltipUseDimensions = ({ containerRef, tooltip, content }, children) => {
  const [dimensions, setDimensions] = useState({
    containerTop: 0,
    containerTopPure: 0,
    containerLeft: 0,
    containerLeftPure: 0,
    containerHeight: 0,
    containerWidth: 0,
    tooltipWidth: 0,
    tooltipHeight: 0,
    windowWidth: 0,
    windowHeight: 0,
    contentHeight: 0,
  });

  useEffect(() => {
    const calculateDimensions = () => {
      const containerDimensions = boundingClientRect(containerRef);
      const tooltipDimensions = boundingClientRect(tooltip);
      const contentDimensions = boundingClientRect(content);
      if (
        containerDimensions &&
        tooltipDimensions &&
        contentDimensions &&
        typeof window !== 'undefined'
      ) {
        setDimensions({
          containerTop: containerDimensions.top,
          containerTopPure: containerDimensions.top - (window.scrollY || window.pageYOffset),
          containerLeft: containerDimensions.left,
          containerLeftPure: containerDimensions.left - (window.scrollX || window.pageXOffset),
          containerHeight: containerDimensions.height,
          containerWidth: containerDimensions.width,
          tooltipWidth: tooltipDimensions.width,
          tooltipHeight: tooltipDimensions.height,
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
          contentHeight: contentDimensions.height,
        });
      }
    };

    calculateDimensions();

    window.addEventListener('resize', calculateDimensions);
    window.addEventListener('scroll', calculateDimensions);
    return () => {
      window.removeEventListener('resize', calculateDimensions);
      window.removeEventListener('scroll', calculateDimensions);
    };
  }, [containerRef, content, tooltip, children]);

  return dimensions;
};

export default useDimensions;
