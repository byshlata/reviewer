export type { AppDispatchType, AppRootStore } from './store';

export { store } from './store';

export {
  useGetReviewsParamsQuery,
  useCreateReviewMutation,
  useGetReviewQuery,
  useSearchByReviewMutation,
  useCreateCommentMutation,
  useGetUserReviewsQuery,
  useDeleteReviewsMutation,
  useChangeAvatarMutation,
  useSetLikeMutation,
  useSetStarMutation,
  useLogoutMutation,
  useRegisterMutation,
  useAuthQuery,
  useLoginMutation,
  useAuthSocialMutation,
  reviewAPI,
  searchAPI,
  authAPI,
  useGetUsersQuery,
  useDeleteUsersMutation,
  useChangeMutation,
  useGetDataStrangerUserQuery,
  userAPI,
  appSettingsAPI,
  useAddCategoryMutation,
} from './api';

export {
  selectorIsAuth,
  selectorIsProgress,
  selectorIsAuthRequest,
  selectorErrorMessage,
  selectorTheme,
  selectorBgColor,
  selectorThemeNow,
  selectorLanguageNow,
  selectorUserRights,
  selectorUserRating,
  selectorUserShortInformation,
  selectorUserAvatar,
  selectorUserLogin,
  selectorAppSettingsCategory,
  selectorTagsForCloud,
  selectorAppUniqueTags,
  selectorDataUserTable,
  selectorDataAdminTable,
} from './selector';

export { occurredError, changeTheme, changeLanguageApp } from './slice';

export type { InitialStateAppType } from './slice';
