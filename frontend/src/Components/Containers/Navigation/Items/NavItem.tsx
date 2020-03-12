import React from 'react';
import TextLink from 'Atoms/TextLink';
import Icon from 'Atoms/Icon';
import styled from 'styled-components';

const TextLinkStyle = styled(TextLink)`
  flex: 1;
  display: flex;
  height: 60px
  line-height: 20px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  i {
    display: block;
  }
`;

const NavItem = ({
  children,
  icon = 'home',
  onClick,
  href,
}: {
  children: string;
  icon?: IconName;
  onClick?: () => void;
  href?: string;
  isDesktop?: boolean;
}) => (
  <TextLinkStyle size="small" onClick={onClick} href={href}>
    {<Icon size="large" className={icon} />}
    {children}
  </TextLinkStyle>
);

export default NavItem;
