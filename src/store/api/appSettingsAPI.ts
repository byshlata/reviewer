import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { PathAPI } from 'enums';
import { Empty, ResponseType } from 'types';

export const appSettingsAPI = createApi({
  reducerPath: 'appSettings',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5050/',
    credentials: 'include',
  }),
  endpoints: builder => ({
    addCategory: builder.mutation<ResponseType<Empty>, { category: string }>({
      query: ({ category }) => ({
        url: `${PathAPI.AppSettings}${PathAPI.AddCategory}`,
        method: 'POST',
        body: { category },
      }),
    }),
  }),
});

export const { useAddCategoryMutation } = appSettingsAPI;
