import React from 'react';
// import PropTypes from 'prop-types';

import createChainedFunction from 'src/utils/createChainedFunction';

type propTypes = {
  href?: string;
  onClick?(event: React.MouseEventHandler): void;
  onKeyDown?(event: React.MouseEventHandler): void;
  disabled?: boolean;
  role?: string;
  tabIndex?: number | string;
  className?: string;
  /**
   * this is sort of silly but needed for Button
   */
  as?: React.ElementType;
};

// type defaultProps = {
//   href: '';
//   onClick: '';
//   onKeyDown: '';
//   disabled: false;
//   role: '';
//   tabIndex: 0;
//   as: React.ElementType;
// };

function isTrivialHref(href) {
  return !href || href.trim() === '#';
}

/**
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, DropdownItems, etc.
 */
const SafeAnchor = React.forwardRef(
  (
    {
      className,
      // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
      as: Component = 'a',
      role,
      href = '#',
      disabled,
      onClick,
      onKeyDown,
      tabIndex,
      ...props
    }: propTypes,
    ref,
  ) => {
    const handleClick = event => {
      // const { href, onClick } = props;

      if (disabled || isTrivialHref(href)) {
        event.preventDefault();
      }

      if (disabled) {
        event.stopPropagation();
        return;
      }

      if (onClick) {
        onClick(event);
      }
    };

    const handleKeyDown = event => {
      if (event.key === ' ') {
        event.preventDefault();
        handleClick(event);
      }
    };

    // if (isTrivialHref(href)) {
    //   role = role || 'button';
    //   // we want to make sure there is a href attribute on the node
    //   // otherwise, the cursor incorrectly styled (except with role='button')
    //   href = href || '#';
    // }

    // if (disabled) {
    //   tabIndex = -1;
    //   props['aria-disabled'] = true;
    // }

    return (
      <Component
        ref={ref}
        {...props}
        onClick={handleClick}
        onKeyDown={createChainedFunction(handleKeyDown, onKeyDown)}
      />
    );
  },
);

// SafeAnchor.propTypes = propTypes;
// SafeAnchor.defaultProps = defaultProps;
SafeAnchor.displayName = 'SafeAnchor';

export default SafeAnchor;
