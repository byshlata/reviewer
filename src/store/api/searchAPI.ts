import { ReactNode } from 'react';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { PathAPI, QueryAPI, TagRTKQuery } from 'enums';
import { ResponseType, SearchResponseType } from 'types';

export const searchAPI = createApi({
  reducerPath: 'search',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    credentials: 'include',
  }),
  tagTypes: [TagRTKQuery.Review, TagRTKQuery.Like, TagRTKQuery.Star],
  endpoints: builder => ({
    searchByReview: builder.mutation<
      ResponseType<{
        searchResult: { value: string; label: string | ReactNode }[];
      }>,
      { searchText: string }
    >({
      query: ({ searchText }) => ({
        url: `${PathAPI.Review}?${QueryAPI.Search}=${searchText}`,
        method: 'POST',
      }),
      transformResponse: (
        response: ResponseType<SearchResponseType>,
      ): ResponseType<{
        searchResult: { value: string; label: string | ReactNode }[];
      }> => ({
        searchResult: response.searchResult.map(({ titleMain, _id }) => ({
          value: _id,
          label: titleMain,
        })),
        appSettings: response.appSettings,
        user: response.user,
      }),
      transformErrorResponse: (response: { status: string | number }) => response.status,
    }),
  }),
});

export const { useSearchByReviewMutation } = searchAPI;
