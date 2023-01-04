import { Language, Theme } from 'enums';
import { InitialStateAppType } from 'store';
import { themeAppDark, themeAppLight } from 'theme';
import { LanguageType, ThemeType, UndefindType } from 'types';

export const loadStateApp = (): UndefindType<InitialStateAppType> => {
  const themeApp = localStorage.getItem('themeApp');
  const languageApp = localStorage.getItem('languageApp');
  const appInitialState: InitialStateAppType = {
    errorMessage: '',
    isProgress: false,
    isAuthRequest: false,
    themeApp: themeAppLight,
    languageApp: Language.English,
    appSettings: { tags: [], category: [] },
  };

  if (JSON.parse(themeApp || '') === Theme.Dark) {
    appInitialState.themeApp = themeAppDark;
  }

  if (JSON.parse(languageApp || '') === Language.Russian) {
    appInitialState.languageApp = Language.Russian;
  }

  return appInitialState;
};

export const saveState = (themeApp: ThemeType, languageApp: LanguageType): void => {
  try {
    localStorage.setItem('themeApp', JSON.stringify(themeApp));
    localStorage.setItem('languageApp', JSON.stringify(languageApp));
  } catch {
    throw new Error('Error save to Local Storage');
  }
};
