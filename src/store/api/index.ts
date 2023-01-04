export {
  useChangeMutation,
  useGetUsersQuery,
  useDeleteUsersMutation,
  userAPI,
} from 'store/api/userAPI';

export {
  useCreateReviewMutation,
  reviewAPI,
  useGetUserReviewsQuery,
  useDeleteReviewsMutation,
  useCreateCommentMutation,
  useSetLikeMutation,
  useSetStarMutation,
  useGetDataStrangerUserQuery,
  useGetReviewsParamsQuery,
  useGetReviewQuery,
} from 'store/api/reviewAPI';

export { useSearchByReviewMutation, searchAPI } from './searchAPI';

export {
  useAuthQuery,
  authAPI,
  useAuthSocialMutation,
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
  useChangeAvatarMutation,
} from './authAPI';

export { useAddCategoryMutation, appSettingsAPI } from 'store/api/appSettingsAPI';
