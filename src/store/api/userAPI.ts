import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { PathAPI, TagRTKQuery } from 'enums';
import {
  AdminTableType,
  DataTableAdminType,
  IdSomeType,
  ResponseType,
  UsersSomeResponseType,
} from 'types';
import { changeDataAdminForTable } from 'utils';

export const userAPI = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    credentials: 'include',
  }),
  tagTypes: [TagRTKQuery.Review, TagRTKQuery.DeleteReview, TagRTKQuery.User],
  endpoints: builder => ({
    getUsers: builder.query<ResponseType<UsersSomeResponseType<DataTableAdminType>>, {}>({
      query: () => `${PathAPI.Users}`,
      transformResponse: (
        response: ResponseType<UsersSomeResponseType<AdminTableType>>,
      ): ResponseType<UsersSomeResponseType<DataTableAdminType>> => ({
        users: changeDataAdminForTable(response.users),
        appSettings: response.appSettings,
        user: response.user,
      }),
      providesTags: [TagRTKQuery.User],
      transformErrorResponse: (response: { status: string | number }) => response.status,
    }),

    deleteUsers: builder.mutation<
      ResponseType<UsersSomeResponseType<DataTableAdminType>>,
      IdSomeType
    >({
      query: ({ idSome }) => ({
        url: `${PathAPI.Users}${PathAPI.Delete}`,
        method: 'DELETE',
        body: { idSome },
      }),
      transformResponse: (
        response: ResponseType<UsersSomeResponseType<AdminTableType>>,
      ): ResponseType<UsersSomeResponseType<DataTableAdminType>> => ({
        users: changeDataAdminForTable(response.users),
        appSettings: response.appSettings,
        user: response.user,
      }),
      invalidatesTags: [TagRTKQuery.User],
      transformErrorResponse: (response: { status: string | number }) => response.status,
    }),

    change: builder.mutation<
      ResponseType<UsersSomeResponseType<DataTableAdminType>>,
      IdSomeType & { path: PathAPI.ChangeRights | PathAPI.ChangeStatus }
    >({
      query: ({ idSome, path }) => ({
        url: `${PathAPI.Users}${path}`,
        method: 'POST',
        body: { idSome },
      }),
      transformResponse: (
        response: ResponseType<UsersSomeResponseType<AdminTableType>>,
      ): ResponseType<UsersSomeResponseType<DataTableAdminType>> => ({
        users: changeDataAdminForTable(response.users),
        appSettings: response.appSettings,
        user: response.user,
      }),
      transformErrorResponse: (response: { status: string | number }) => response.status,
    }),
  }),
});

export const { useGetUsersQuery, useDeleteUsersMutation, useChangeMutation } = userAPI;
