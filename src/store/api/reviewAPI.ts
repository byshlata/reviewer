import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { DataReviewType } from 'components/headerReviewPage/types/DataReviewType';
import { PathAPI, TagRTKQuery } from 'enums';
import {
  DataCommentType,
  DataTableUserType,
  Empty,
  IdSomeType,
  LikeType,
  Nullable,
  ResponseType,
  ReviewResponseType,
  ReviewShortType,
  ReviewsSomeResponseType,
  ReviewUserTableType,
  StarType,
  UndefindType,
  UserType,
} from 'types';
import {
  changeDataUserForTable,
  transformResponseReviewData,
  transformResponseShortReviewData,
} from 'utils';

export const reviewAPI = createApi({
  reducerPath: 'review',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5050/',
    credentials: 'include',
  }),
  tagTypes: [
    TagRTKQuery.Review,
    TagRTKQuery.DeleteReview,
    TagRTKQuery.User,
    TagRTKQuery.Like,
    TagRTKQuery.Star,
  ],
  endpoints: builder => ({
    createReview: builder.mutation<
      UndefindType<ResponseType<Empty>>,
      DataReviewType & { url: string } & { idReview?: string }
    >({
      async queryFn(
        {
          authorAssessment,
          category,
          image,
          reviewText,
          tags,
          titleAbout,
          titleMain,
          idUser,
          url,
          idReview,
        },
        _queryApi,
        _extraOptions,
        fetchWithBQ,
      ) {
        const formData = new FormData();
        if (image) {
          formData.append('file', image);
        }

        if (idReview) {
          formData.append('idReview', `${idReview}`);
        }

        formData.append('titleMain', titleMain);
        formData.append('titleAbout', titleAbout);
        formData.append('category', category);
        formData.append('tags', `${tags}`);
        formData.append('authorAssessment', `${authorAssessment}`);
        formData.append('reviewText', `${reviewText}`);
        formData.append('idUser', `${idUser}`);

        const response = await fetchWithBQ({
          url,
          method: 'POST',
          body: formData,
        });
        if (response.error) throw response.error;
        const data = response.data as UndefindType<ResponseType<Empty>>;
        return response.data ? { data } : { error: response.error };
      },
      invalidatesTags: [TagRTKQuery.Review, TagRTKQuery.DeleteReview],
    }),

    createComment: builder.mutation<ResponseType<ReviewResponseType>, DataCommentType>({
      query: ({ text, idReview }) => ({
        url: `${PathAPI.Review}${PathAPI.CreateComment}`,
        method: 'POST',
        body: { textComment: text, idReview },
      }),
    }),

    deleteReviews: builder.mutation<
      ResponseType<ReviewsSomeResponseType<DataTableUserType>>,
      IdSomeType
    >({
      query: ({ idSome }) => ({
        url: `${PathAPI.Review}${PathAPI.Delete}`,
        method: 'DELETE',
        body: { idSome },
      }),
      transformResponse: (
        response: ResponseType<ReviewsSomeResponseType<ReviewUserTableType>>,
      ): ResponseType<ReviewsSomeResponseType<DataTableUserType>> => ({
        reviews: changeDataUserForTable(response.reviews),
        appSettings: response.appSettings,
        user: response.user,
      }),
      transformErrorResponse: (response: { status: string | number }) => response.status,
    }),

    setLike: builder.mutation<ResponseType<Empty>, LikeType>({
      query: ({ idReview }) => ({
        url: `${PathAPI.Review}${PathAPI.Like}`,
        method: 'POST',
        body: { idReview },
      }),
      invalidatesTags: [TagRTKQuery.Like],
    }),

    setStar: builder.mutation<ResponseType<Empty>, StarType>({
      query: ({ idReview, numberStar }) => ({
        url: `${PathAPI.Review}${PathAPI.Star}`,
        method: 'POST',
        body: { idReview, numberStar },
      }),
      invalidatesTags: [TagRTKQuery.Star],
    }),

    getUserReviews: builder.query<
      ResponseType<ReviewsSomeResponseType<DataTableUserType>>,
      { id: string }
    >({
      query: ({ id }) => `${PathAPI.Review}${PathAPI.User}${PathAPI.Root}${id}`,
      transformResponse: (
        response: ResponseType<ReviewsSomeResponseType<ReviewUserTableType>>,
      ): ResponseType<ReviewsSomeResponseType<DataTableUserType>> => ({
        reviews: changeDataUserForTable(response.reviews),
        appSettings: response.appSettings,
        user: response.user,
      }),
      providesTags: [TagRTKQuery.DeleteReview, TagRTKQuery.Review],
      transformErrorResponse: (response: { status: string | number }) => response.status,
    }),

    getDataStrangerUser: builder.query<
      ResponseType<
        ReviewsSomeResponseType<DataTableUserType> & {
          userOther: UserType;
        }
      >,
      { id: string }
    >({
      query: ({ id }) => `${PathAPI.User}${PathAPI.Root}${id}`,
      transformResponse: (
        response: ResponseType<
          ReviewsSomeResponseType<ReviewUserTableType> & {
            userOther: UserType;
          }
        >,
      ): ResponseType<
        ReviewsSomeResponseType<DataTableUserType> & {
          userOther: UserType;
        }
      > => ({
        reviews: changeDataUserForTable(response.reviews),
        appSettings: response.appSettings,
        user: response.user,
        userOther: response.userOther,
      }),
      transformErrorResponse: (response: { status: string | number }) => response.status,
    }),

    getReviewsParams: builder.query<
      ResponseType<ReviewsSomeResponseType<ReviewShortType>>,
      {
        count?: number;
        rating?: Nullable<string>;
        data?: Nullable<string>;
        tag?: Nullable<string>;
      }
    >({
      query: ({ data, count, rating, tag }) => ({
        url: `${PathAPI.Reviews}`,
        params: { rating, data, count, tag },
      }),
      transformResponse: (
        response: ResponseType<ReviewsSomeResponseType<ReviewShortType>>,
      ) => transformResponseShortReviewData(response),
      providesTags: [TagRTKQuery.Review, TagRTKQuery.Like, TagRTKQuery.Star],
    }),

    getReview: builder.query<ResponseType<ReviewResponseType>, { id: string }>({
      query: ({ id }) => `${PathAPI.Review}${PathAPI.Root}${id}`,
      transformResponse: (response: ResponseType<ReviewResponseType>) =>
        transformResponseReviewData(response),
      providesTags: [TagRTKQuery.Like, TagRTKQuery.Star],
    }),
  }),
});

export const {
  useCreateReviewMutation,
  useCreateCommentMutation,
  useDeleteReviewsMutation,
  useSetLikeMutation,
  useSetStarMutation,
  useGetUserReviewsQuery,
  useGetDataStrangerUserQuery,
  useGetReviewsParamsQuery,
  useGetReviewQuery,
} = reviewAPI;
