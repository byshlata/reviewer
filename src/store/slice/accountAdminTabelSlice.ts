import { createSlice } from '@reduxjs/toolkit';

import { DataTableAdminType } from '../../types';
import { userAPI } from '../api';

export type InitialStateUserTableSliceType = {
  dataTable: DataTableAdminType[];
};

export const initialStateUserTableSlice: InitialStateUserTableSliceType = {
  dataTable: [],
};

export const accountAdminTableSlice = createSlice({
  name: 'accountAdminTableSlice',
  initialState: initialStateUserTableSlice,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(userAPI.endpoints.getUsers.matchFulfilled, (state, action) => {
      state.dataTable = action.payload.users;
    });

    builder.addMatcher(userAPI.endpoints.change.matchFulfilled, (state, action) => {
      state.dataTable = action.payload.users;
    });
  },
});
