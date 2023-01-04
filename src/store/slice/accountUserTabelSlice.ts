import { createSlice } from '@reduxjs/toolkit';

import { DataTableUserType } from '../../types';
import { reviewAPI } from '../api';

export type InitialStateUserTableSliceType = {
  dataTable: DataTableUserType[];
};

export const initialStateUserTableSlice: InitialStateUserTableSliceType = {
  dataTable: [],
};

export const accountUserTableSlice = createSlice({
  name: 'accountUserTableSlice',
  initialState: initialStateUserTableSlice,
  reducers: {},
  extraReducers: builder => {
    builder.addMatcher(
      reviewAPI.endpoints.deleteReviews.matchFulfilled,
      (state, action) => {
        state.dataTable = action.payload.reviews;
      },
    );
    builder.addMatcher(
      reviewAPI.endpoints.getUserReviews.matchFulfilled,
      (state, action) => {
        state.dataTable = action.payload.reviews;
      },
    );
  },
});
