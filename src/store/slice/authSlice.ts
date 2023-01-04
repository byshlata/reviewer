import { createSlice } from '@reduxjs/toolkit';

import { Nullable, UserType } from '../../types';
import { authAPI, reviewAPI, userAPI } from '../api';

export type InitStateAuthSliceType = {
  user: Nullable<UserType>;
};

export const initialStateUserAuthSlice: InitStateAuthSliceType = { user: null };

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: initialStateUserAuthSlice,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(reviewAPI.endpoints.setLike.matchFulfilled, (state, action) => {
      if (state.user) {
        state.user.rating = action.payload.user.rating;
      }
    });

    builder.addMatcher(authAPI.endpoints.auth.matchFulfilled, (state, action) => {
      state.user = action.payload.user;
    });

    builder.addMatcher(authAPI.endpoints.login.matchFulfilled, (state, action) => {
      state.user = action.payload.user;
    });

    builder.addMatcher(authAPI.endpoints.register.matchFulfilled, (state, action) => {
      state.user = action.payload.user;
    });

    builder.addMatcher(authAPI.endpoints.authSocial.matchFulfilled, (state, action) => {
      state.user = action.payload.user;
    });

    builder.addMatcher(authAPI.endpoints.logout.matchFulfilled, (state, action) => {
      state.user = action.payload.user;
    });

    builder.addMatcher(authAPI.endpoints.changeAvatar.matchFulfilled, (state, action) => {
      if (action.payload) {
        state.user = action.payload.user;
      }
    });

    builder.addMatcher(userAPI.endpoints.change.matchFulfilled, (state, action) => {
      if (action.payload) {
        state.user = action.payload.user;
      }
    });
  },
});
