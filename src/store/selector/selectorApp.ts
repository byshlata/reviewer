import { AppRootStore } from 'store';
import { ThemeAppType } from 'theme';
import { LanguageType, Nullable, ThemeType } from 'types';

export const selectorIsProgress = (state: AppRootStore): boolean => state.app.isProgress;

export const selectorIsAuthRequest = (state: AppRootStore): boolean =>
  state.app.isAuthRequest;

export const selectorErrorMessage = (state: AppRootStore): Nullable<string> =>
  state.app.errorMessage;

export const selectorTheme = (state: AppRootStore): ThemeAppType => state.app.themeApp;

export const selectorThemeNow = (state: AppRootStore): ThemeType =>
  state.app.themeApp.theme;

export const selectorLanguageNow = (state: AppRootStore): LanguageType =>
  state.app.languageApp;

export const selectorBgColor = (state: AppRootStore): string =>
  state.app.themeApp.token.colorBgBase;

export const selectorAppSettingsCategory = (state: AppRootStore): string[] =>
  state.app.appSettings.category;

export const selectorAppUniqueTags = (state: AppRootStore): string[] =>
  Array.from(new Set(state.app.appSettings.tags));

export const selectorTagsForCloud = (state: AppRootStore): string[] =>
  state.app.appSettings.tags;
