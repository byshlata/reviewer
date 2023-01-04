import { ThemeAppType } from './types/ThemeAppType';

import { Theme } from 'enums';

const colorTextLight = 'rgba(0, 0, 0, 1)';
const colorTextDark = 'rgba(255, 255, 255, 1)';
// ThemeAppType
export const themeAppDark: ThemeAppType = {
  token: {
    colorPrimary: 'rgba(0, 0, 0, 1)',
    colorBgBase: 'rgba(49, 109, 146, 1)',
    colorTextBase: colorTextDark,
    colorPrimaryBg: 'rgba(141, 158, 165)',
    colorLink: colorTextDark,
    colorTextLightSolid: colorTextDark,
    colorLinkHover: 'rgb(103, 96, 96, 1)',
    colorText: colorTextDark,
    colorOther: 'rgba(49, 109, 146, 0.7)',
  },
  theme: Theme.Dark,
};

export const themeAppLight: ThemeAppType = {
  token: {
    colorPrimary: 'rgba(186, 217, 150, 1)',
    colorBgBase: 'rgba(118, 188, 245, 1)',
    colorTextBase: colorTextLight,
    colorPrimaryBg: 'rgba(255, 255, 255, 1)',
    colorLink: colorTextLight,
    colorTextLightSolid: colorTextLight,
    colorLinkHover: 'rgb(103, 96, 96, 1)',
    colorText: colorTextLight,
    colorOther: 'rgba(118, 188, 245, 0.7)',
  },
  theme: Theme.Light,
};
