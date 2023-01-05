import { ReactNode } from 'react';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { PathAPI, QueryAPI, TagRTKQuery } from 'enums';
import { SearchResponseType } from 'types';

export const searchAPI = createApi({
  reducerPath: 'search',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5050/',
    credentials: 'include',
  }),
  tagTypes: [TagRTKQuery.Review, TagRTKQuery.Like, TagRTKQuery.Star],
  endpoints: builder => ({
    searchByReview: builder.mutation<
      { value: string; label: string | ReactNode }[],
      { searchText: string }
    >({
      query: ({ searchText }) => ({
        url: `${PathAPI.Review}?${QueryAPI.Search}=${searchText}`,
        method: 'POST',
      }),
      transformResponse: (response: SearchResponseType) =>
        response.searchResult.map(({ titleMain, _id }) => ({
          value: _id,
          label: titleMain,
        })),
      transformErrorResponse: (response: { status: string | number }) => response.status,
    }),
  }),
});

export const { useSearchByReviewMutation } = searchAPI;
