import React from 'react';
import styled from 'styled-components';

import defaultTheme from 'utils/token';
import Badge, { StyledBadge } from '../Badge';
import { TYPE_OPTIONS } from '../Badge/consts';

const StyledNotificationBadge = styled.div`
  ${StyledBadge} {
    width: ${({ theme }) => theme.jajiga.widthBadgeCircled};
    padding: 0;
  }
`;

StyledNotificationBadge.defaultProps = {
  theme: defaultTheme,
};

const NotificationBadge = (props: NotificationBadgeProps) => {
  const { type = TYPE_OPTIONS.NEUTRAL, children, icon, ariaLabel, dataTest } = props;

  return (
    <StyledNotificationBadge>
      <Badge type={type as BadgeType} dataTest={dataTest} icon={icon} ariaLabel={ariaLabel}>
        {!icon && children}
      </Badge>
    </StyledNotificationBadge>
  );
};

export default NotificationBadge;
