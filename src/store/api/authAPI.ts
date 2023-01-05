import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { PathAPI } from 'enums';
import {
  AuthSocialType,
  Empty,
  LoginType,
  RegistrationType,
  ResponseType,
  UndefindType,
} from 'types';

export const authAPI = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5050/',
    credentials: 'include',
  }),
  endpoints: builder => ({
    auth: builder.query<ResponseType<Empty>, Empty>({
      query: () => `${PathAPI.Auth}`,
    }),

    logout: builder.mutation<ResponseType<Empty>, Empty>({
      query: () => ({
        url: `${PathAPI.Logout}`,
        method: 'POST',
      }),
    }),

    register: builder.mutation<ResponseType<Empty>, RegistrationType>({
      query: ({ email, password, login }) => ({
        url: `${PathAPI.Register}`,
        method: 'POST',
        body: { email, password, login },
      }),
    }),

    login: builder.mutation<ResponseType<Empty>, LoginType>({
      query: ({ email, password }) => ({
        url: `${PathAPI.Login}`,
        method: 'POST',
        body: { email, password },
      }),
    }),

    authSocial: builder.mutation<ResponseType<Empty>, AuthSocialType>({
      query: ({ email, password, avatar, login }) => ({
        url: `${PathAPI.Social}`,
        method: 'POST',
        body: { email, password, login, avatar },
      }),
    }),

    changeAvatar: builder.mutation<UndefindType<ResponseType<Empty>>, { file: File }>({
      async queryFn({ file }, _queryApi, _extraOptions, fetchWithBQ) {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetchWithBQ({
          url: `${PathAPI.ChangeAvatar}`,
          method: 'POST',
          body: formData,
        });
        if (response.error) throw response.error;
        const data = response.data as UndefindType<ResponseType<Empty>>;
        return response.data ? { data } : { error: response.error };
      },
    }),
  }),
});

export const {
  useAuthQuery,
  useAuthSocialMutation,
  useLogoutMutation,
  useRegisterMutation,
  useLoginMutation,
  useChangeAvatarMutation,
} = authAPI;
