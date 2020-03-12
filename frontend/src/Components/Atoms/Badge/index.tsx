import React from 'react';
import styled from 'styled-components';

import { rtlSpacing } from 'utils/rtl';
import defaultTheme from 'utils/token';
import { TYPE_OPTIONS, TOKENS } from './consts';

const getTypeToken = name => ({ theme, type }) => {
  const tokens = {
    [TOKENS.background]: {
      [TYPE_OPTIONS.NEUTRAL]: theme.jajiga.backgroundBadgeNeutral,
      [TYPE_OPTIONS.INFO]: theme.jajiga.backgroundBadgeInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.jajiga.backgroundBadgeSuccess,
      [TYPE_OPTIONS.WARNING]: theme.jajiga.backgroundBadgeWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.jajiga.backgroundBadgeCritical,
      [TYPE_OPTIONS.DARK]: theme.jajiga.backgroundBadgeDark,
      [TYPE_OPTIONS.WHITE]: theme.jajiga.backgroundBadgeWhite,
      [TYPE_OPTIONS.INFO_INVERTED]: theme.jajiga.paletteBlueNormal,
      [TYPE_OPTIONS.CRITICAL_INVERTED]: theme.jajiga.paletteRedNormal,
      [TYPE_OPTIONS.SUCCESS_INVERTED]: theme.jajiga.paletteGreenNormal,
      [TYPE_OPTIONS.WARNING_INVERTED]: theme.jajiga.paletteOrangeNormal,
    },
    [TOKENS.color]: {
      [TYPE_OPTIONS.NEUTRAL]: theme.jajiga.colorTextBadgeNeutral,
      [TYPE_OPTIONS.INFO]: theme.jajiga.colorTextBadgeInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.jajiga.colorTextBadgeSuccess,
      [TYPE_OPTIONS.WARNING]: theme.jajiga.colorTextBadgeWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.jajiga.colorTextBadgeCritical,
      [TYPE_OPTIONS.DARK]: theme.jajiga.colorTextBadgeDark,
      [TYPE_OPTIONS.WHITE]: theme.jajiga.colorTextBadgeWhite,
      [TYPE_OPTIONS.INFO_INVERTED]: theme.jajiga.paletteWhite,
      [TYPE_OPTIONS.CRITICAL_INVERTED]: theme.jajiga.paletteWhite,
      [TYPE_OPTIONS.SUCCESS_INVERTED]: theme.jajiga.paletteWhite,
      [TYPE_OPTIONS.WARNING_INVERTED]: theme.jajiga.paletteWhite,
    },
  };
  return tokens[name][type];
};

export const StyledBadge = styled(({ className, children, dataTest, ariaLabel }) => (
  <div className={className} data-test={dataTest} aria-label={ariaLabel}>
    {children}
  </div>
))`
  display: inline-flex;
  flex: 0 0 auto;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  min-height: ${({ theme }) => theme.jajiga.heightBadge};
  line-height: 14px;
  font-size: ${({ theme }) => theme.jajiga.fontSizeTextSmall};
  font-weight: ${({ theme }) => theme.jajiga.fontWeightMedium};
  background-color: ${getTypeToken(TOKENS.background)};
  color: ${getTypeToken(TOKENS.color)};
  border-radius: ${({ theme }) => theme.jajiga.borderRadiusBadge};
  padding: ${({ theme }) => theme.jajiga.paddingBadge};
`;

StyledBadge.defaultProps = {
  theme: defaultTheme,
};

const IconContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  flex-shrink: 0;
  margin: ${({ theme, hasContent }) => hasContent && rtlSpacing(theme.jajiga.marginBadgeIcon)};

  i {
    height: ${({ theme }) => theme.jajiga.widthIconSmall};
    width: ${({ theme }) => theme.jajiga.heightIconSmall};
  }
`;

IconContainer.defaultProps = {
  theme: defaultTheme,
};

const StyledBadgeContent = styled.div`
  padding: 5px 0;
  line-height: 1;
`;

StyledBadgeContent.defaultProps = {
  theme: defaultTheme,
};

const Badge = (props: BadgeProps) => {
  const { type = TYPE_OPTIONS.NEUTRAL as BadgeType, icon, children, ariaLabel, dataTest } = props;

  return (
    <StyledBadge type={type} dataTest={dataTest} ariaLabel={ariaLabel}>
      {icon && (
        <IconContainer type={type} hasContent={!!children}>
          {icon}
        </IconContainer>
      )}
      <StyledBadgeContent>{children}</StyledBadgeContent>
    </StyledBadge>
  );
};

export default Badge;
