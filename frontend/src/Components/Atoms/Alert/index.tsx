import React from 'react';
import styled from 'styled-components';

import defaultTheme from 'utils/token';
import Icon from 'Atoms/Icon';
import { rtlSpacing, right } from 'utils/rtl';
import getSpacingToken from 'utils/common/getSpacingToken';
import ButtonLink from '../ButtonLink';
import { StyledTextLink } from '../TextLink';
import { TYPE_OPTIONS, TOKENS, CLOSE_BUTTON_DATA_TEST } from './consts';
import { Item } from '../List/ListItem';
import { StyledText } from '../Text';

type IconProps = {
  icon: any;
  type: string;
};

const getTypeToken = name => ({ theme, type }) => {
  const tokens = {
    [TOKENS.colorIconAlert]: {
      [TYPE_OPTIONS.INFO]: theme.jajiga.colorAlertIconInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.jajiga.colorAlertIconSuccess,
      [TYPE_OPTIONS.WARNING]: theme.jajiga.colorAlertIconWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.jajiga.colorAlertIconCritical,
    },
    [TOKENS.backgroundAlert]: {
      [TYPE_OPTIONS.INFO]: theme.jajiga.backgroundAlertInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.jajiga.backgroundAlertSuccess,
      [TYPE_OPTIONS.WARNING]: theme.jajiga.backgroundAlertWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.jajiga.backgroundAlertCritical,
    },
    [TOKENS.colorTextAlert]: {
      [TYPE_OPTIONS.INFO]: theme.jajiga.colorTextAlertInfo,
      [TYPE_OPTIONS.SUCCESS]: theme.jajiga.colorTextAlertSuccess,
      [TYPE_OPTIONS.WARNING]: theme.jajiga.colorTextAlertWarning,
      [TYPE_OPTIONS.CRITICAL]: theme.jajiga.colorTextAlertCritical,
    },
    // TODO: create token
    [TOKENS.colorTextLinkAlertHover]: {
      [TYPE_OPTIONS.INFO]: theme.jajiga.paletteBlueDarkHover,
      [TYPE_OPTIONS.SUCCESS]: theme.jajiga.paletteGreenDarkHover,
      [TYPE_OPTIONS.WARNING]: theme.jajiga.paletteOrangeDarkHover,
      [TYPE_OPTIONS.CRITICAL]: theme.jajiga.paletteRedDarkActive,
    },
  };

  return tokens[name][type];
};

const AlertIcon = ({ icon, type }: IconProps) => {
  // Icon should be boolean and TRUE
  if (typeof icon === 'boolean' && icon) {
    if (type === TYPE_OPTIONS.INFO) {
      return <Icon />;
    }
    if (type === TYPE_OPTIONS.SUCCESS) {
      return <Icon />;
    }
    if (type === TYPE_OPTIONS.WARNING) {
      return <Icon />;
    }
    if (type === TYPE_OPTIONS.CRITICAL) {
      return <Icon />;
    }
  }
  return icon;
};

const StyledAlert = styled('div')<AlertProps>`
  position: relative;
  display: flex;
  width: 100%;
  padding: ${({ theme, icon, closable }) =>
    rtlSpacing(
      closable
        ? (icon &&
            `${theme.jajiga.paddingAlert} ${theme.jajiga.spaceXXLarge} ${theme.jajiga.paddingAlert} ${theme.jajiga.paddingAlert}`) ||
            `${theme.jajiga.paddingAlert} ${theme.jajiga.spaceXXLarge} ${theme.jajiga.paddingAlert} ${theme.jajiga.paddingAlert}`
        : (icon &&
            `${theme.jajiga.paddingAlert} ${theme.jajiga.paddingAlert} ${theme.jajiga.paddingAlert} ${theme.jajiga.paddingAlert}`) ||
            `${theme.jajiga.paddingAlert}`,
    )};
  border-radius: ${({ theme }) => theme.jajiga.borderRadiusNormal};
  background: ${getTypeToken(TOKENS.backgroundAlert)};
  color: ${getTypeToken(TOKENS.colorTextAlert)};
  font-family: ${({ theme }) => theme.jajiga.fontFamily};
  font-size: ${({ theme }) => theme.jajiga.fontSizeTextNormal};
  box-sizing: border-box;
  margin-bottom: ${getSpacingToken};
`;

StyledAlert.defaultProps = {
  theme: defaultTheme,
};

const IconContainer = styled('div')<{ inlineActions; type }>`
  flex-shrink: 0;
  margin: ${({ theme }) => rtlSpacing(`0 ${theme.jajiga.spaceSmall} 0 0`)};
  color: ${getTypeToken(TOKENS.colorIconAlert)};
  display: ${({ inlineActions }) => inlineActions && 'flex'};
  align-items: ${({ inlineActions }) => inlineActions && 'center'};
`;

IconContainer.defaultProps = {
  theme: defaultTheme,
};

const ContentWrapper = styled('div')<{ title; inlineActions }>`
  flex: 1; // IE wrapping fix
  display: flex;
  flex-direction: ${({ title, inlineActions }) => title && (inlineActions ? 'row' : 'column')};
  align-items: ${({ title }) => !title && 'center'};
  justify-content: ${({ inlineActions }) => inlineActions && 'space-between'};
`;

const AlertTitle = styled('div')<{ hasChildren; inlineActions }>`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme, hasChildren, inlineActions }) =>
    hasChildren && (inlineActions ? '0' : theme.jajiga.spaceXSmall)};
  font-weight: ${({ theme }) => theme.jajiga.fontWeightBold};
  line-height: ${({ theme }) => theme.jajiga.lineHeightHeading};
  min-height: ${({ theme }) => theme.jajiga.heightIconMedium};
`;

AlertTitle.defaultProps = {
  theme: defaultTheme,
};

const Content = styled('div')<{ title; inlineActions; type }>`
  display: block;
  margin-bottom: ${({ theme, title, inlineActions }) =>
    title && (inlineActions ? '0' : theme.jajiga.spaceXXSmall)};
  line-height: ${({ theme }) => theme.jajiga.lineHeightText};

  & a,
  & ${StyledTextLink} {
    color: ${getTypeToken(TOKENS.colorTextAlert)};
    font-weight: ${({ theme }) => theme.jajiga.fontWeightMedium};
    transition: color ${({ theme }) => theme.jajiga.durationFast} ease-in-out;
    &:hover,
    &:focus,
    &:active {
      color: ${getTypeToken(TOKENS.colorTextLinkAlertHover)};
    }
  }
  & ${Item}, ${StyledText} {
    color: ${getTypeToken(TOKENS.colorTextAlert)};
  }
`;

Content.defaultProps = {
  theme: defaultTheme,
};

const CloseContainer = styled('div')<{ hasChildren }>`
  position: absolute;
  top: ${({ hasChildren }) => (hasChildren ? 0 : '50%')};
  margin-top: ${({ hasChildren, theme }) => !hasChildren && `-${theme.jajiga.widthIconSmall}`};
  ${right}: 0;
  margin-${right}: ${({ hasChildren, theme }) => !hasChildren && theme.jajiga.spaceXSmall};
`;

CloseContainer.defaultProps = {
  theme: defaultTheme,
};

const AlertCloseButton = ({ hasChildren, dataTest, onClick, icon }) => {
  return (
    <CloseContainer hasChildren={hasChildren}>
      <ButtonLink
        dataTest={dataTest}
        onClick={onClick}
        size="small"
        icon={icon}
        transparent
        title="close"
      />
    </CloseContainer>
  );
};

const Alert = (props: AlertProps) => {
  const {
    type = TYPE_OPTIONS.INFO as AlertType,
    title,
    closable,
    icon,
    onClose = () => {},
    children,
    dataTest,
    spaceAfter,
    inlineActions = false,
  } = props;
  return (
    <StyledAlert
      type={type}
      icon={icon}
      closable={closable}
      dataTest={dataTest}
      spaceAfter={spaceAfter}>
      {icon && (
        <IconContainer type={type} inlineActions={inlineActions}>
          <AlertIcon type={type} icon={icon} />
        </IconContainer>
      )}
      <ContentWrapper title={title} inlineActions={inlineActions}>
        {title && (
          <AlertTitle hasChildren={children} inlineActions={inlineActions}>
            {title}
          </AlertTitle>
        )}
        {children && !inlineActions && (
          <Content title={title} type={type} inlineActions={inlineActions}>
            {children}
          </Content>
        )}
        {inlineActions && (
          <Content title={title} type={type} inlineActions={inlineActions}>
            {inlineActions}
          </Content>
        )}
      </ContentWrapper>
      {closable && (
        <AlertCloseButton
          hasChildren={children}
          dataTest={CLOSE_BUTTON_DATA_TEST}
          onClick={onClose}
          icon={<Icon size="small" color={type} />}
        />
      )}
    </StyledAlert>
  );
};

export default Alert;
