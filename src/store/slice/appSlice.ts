import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Language, Theme } from '../../enums';
import { themeAppDark, themeAppLight, ThemeAppType } from '../../theme';
import { AppSettingsType, LanguageType, Nullable } from '../../types';

export type InitialStateAppType = {
  errorMessage: Nullable<string>;
  isProgress: boolean;
  isAuthRequest: boolean;
  languageApp: LanguageType;
  themeApp: ThemeAppType;
  appSettings: AppSettingsType;
};

export const initialStateApp: InitialStateAppType = {
  errorMessage: '',
  isProgress: false,
  isAuthRequest: false,
  themeApp: themeAppLight,
  languageApp: Language.English,
  appSettings: { tags: [], category: [] },
};

export const appSlice = createSlice({
  name: 'app',
  initialState: initialStateApp,
  reducers: {
    occurredError: (state, action: PayloadAction<Nullable<string>>) => {
      state.errorMessage = action.payload;
    },
    changeTheme: state => {
      state.themeApp =
        state.themeApp.theme === Theme.Light ? themeAppDark : themeAppLight;
    },
    changeLanguageApp: state => {
      state.languageApp =
        state.languageApp === Language.English ? Language.Russian : Language.English;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type.endsWith('/pending'),
      state => {
        state.isProgress = true;
      },
    );

    builder.addMatcher(
      action => action.type.endsWith('/rejected'),
      (state, action: PayloadAction<string>) => {
        state.isProgress = false;
        state.errorMessage = action.payload;
      },
    );

    builder.addMatcher(
      action => action.type.endsWith('/fulfilled'),
      (state, action) => {
        state.isProgress = false;
        if (
          action.payload.appSettings &&
          state.appSettings.tags.length !== action.payload.appSettings.tags.length
        ) {
          state.appSettings.tags = action.payload.appSettings.tags;
        }

        if (
          action.payload.appSettings &&
          state.appSettings.category.length !== action.payload.appSettings.category.length
        ) {
          state.appSettings.category = action.payload.appSettings.category;
        }
      },
    );
  },
});

export const { occurredError, changeTheme, changeLanguageApp } = appSlice.actions;
