import { configureStore } from '@reduxjs/toolkit';

import { appSlice } from './slice';

import { reviewAPI, searchAPI, userAPI, authAPI, appSettingsAPI } from 'store/api';
import { accountAdminTableSlice, accountUserTableSlice, authSlice } from 'store/slice';
import { loadStateApp, saveState } from 'utils/localStorageHelper';

export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    accountUserTable: accountUserTableSlice.reducer,
    accountAdminTable: accountAdminTableSlice.reducer,
    authUser: authSlice.reducer,
    [reviewAPI.reducerPath]: reviewAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [searchAPI.reducerPath]: searchAPI.reducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [appSettingsAPI.reducerPath]: appSettingsAPI.reducer,
  },
  preloadedState: {
    app: loadStateApp(),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(reviewAPI.middleware)
      .concat(userAPI.middleware)
      .concat(searchAPI.middleware)
      .concat(authAPI.middleware)
      .concat(appSettingsAPI.middleware),
});

store.subscribe(() => {
  saveState(store.getState().app.themeApp.theme, store.getState().app.languageApp);
});

export type AppRootStore = ReturnType<typeof store.getState>;

export type AppDispatchType = typeof store.dispatch;
