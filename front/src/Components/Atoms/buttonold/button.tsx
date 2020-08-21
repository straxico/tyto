import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import styled from 'styled-components';

const StyledElement = as => styled(as)`
  &.btn {
    display: inline-block;
    min-width: 3em;
    font-weight: 400;
    color: #212529;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.1875rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &.text-white {
      color: white;
    }

    &.align-right {
      text-align: right;
    }
    &.align-left {
      text-align: left;
    }

    .icon {
      line-height: 1;
      color: inherit;
      position: initial;
      &.before {
        margin-left: 0.5em;
      }
      &.after {
        margin-right: 0.5em;
      }
    }

    &.btn-group-lg > .btn,
    &.btn-lg {
      padding: 0.5rem 1rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: 0.1875rem;

      .icon {
        vertical-align: sub;
      }
    }
    &.btn-group-sm > .btn,
    &.btn-sm {
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
      line-height: 2;
      border-radius: 0.25rem;
      height: calc(1.75rem + 0.5rem + 2px);
    }
    &.btn-block {
      display: block;
      width: 100%;
    }

    &.btn-primary {
      color: #fff;
      background-color: var(--primary);
      border-color: var(--primary);
    }
    &.btn-outline-primary {
      color: var(--primary);
      border-color: var(--primary);
    }
    &.btn-light {
      color: #212529;
      background-color: #f8f9fa;
      border-color: #f8f9fa;
    }
    &.btn-outline-light {
      color: #f8f9fa;
      border-color: #f8f9fa;
    }
    &.btn[class*='btn-outline'] {
      border-width: 2px;
    }

    &.noContent {
      .icon {
        margin-right: -0.2em;
        font-size: 1.5em;
        font-weight: bold;
      }
    }
  }
`;

const Button = ({
  variant = 'primary',
  size,
  block,
  active = false,
  disabled = false,
  href,
  as,
  shallow,
  type = 'button',
  noContent = false,
  icon,
  className,
  align,
  children,
  ...props
}: ButtonoldProps) => {
  const prefix = 'btn';

  const classes = classNames(
    className,
    prefix,
    active && 'active',
    `${prefix}-${variant}`,
    block && `${prefix}-block`,
    align && `align-${align}`,
    size && `${prefix}-${size}`,
    noContent && 'noContent',
  );

  let tag = 'button';
  let Type = type;
  if (href) {
    tag = 'a';
    Type = null;
  }

  const ButtonStyle = StyledElement(tag);

  const ButtonElement = (
    <ButtonStyle type={Type} className={classes} {...props}>
      {icon && icon[1] == 'before' && <i className={`icon ${icon[0]} ${icon[1]}`} />}
      {children}
      {icon && icon[1] == 'after' && <i className={`icon ${icon[0]} ${icon[1]}`} />}
    </ButtonStyle>
  );

  return (
    <>
      {tag == 'button' ? (
        ButtonElement
      ) : (
        <Link href={href} as={as} shallow={shallow} passHref>
          {ButtonElement}
        </Link>
      )}
    </>
  );
};

export default Button;
