import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { StatusUser } from '../../enums';
import { Nullable, UserType } from '../../types';

export type InitStateAuthSliceType = {
  user: Nullable<UserType>;
};

export const initialStateUserAuthSlice: InitStateAuthSliceType = {
  user: null,
};

export const authSlice = createSlice({
  name: 'authSlice',
  initialState: initialStateUserAuthSlice,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      action => action.type.endsWith('/fulfilled'),
      (state, action: PayloadAction<{ user: Nullable<UserType> }>) => {
        if (state.user && action.payload.user) {
          if (state.user.rights !== action.payload.user.rights) {
            state.user.rights = action.payload.user.rights;
          }
          if (state.user.rating !== action.payload.user.rating) {
            state.user.rating = action.payload.user.rating;
          }
          if (state.user.avatar !== action.payload.user.avatar) {
            state.user.avatar = action.payload.user.avatar;
          }
        }

        if (
          !state.user &&
          action.payload.user &&
          action.payload.user.status !== StatusUser.Block
        ) {
          state.user = action.payload.user;
        }

        if (state.user && !action.payload.user) {
          state.user = null;
        }
      },
    );
  },
});
