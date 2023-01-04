import { AppRootStore } from 'store';
import { Nullable, RightsType, UndefindType } from 'types';
import { createInformationAbout } from 'utils';

export const selectorIsAuth = (state: AppRootStore): UndefindType<string> =>
  state.authUser.user?.id;

export const selectorUserRights = (state: AppRootStore): UndefindType<RightsType> =>
  state.authUser.user?.rights;

export const selectorUserRating = (state: AppRootStore): UndefindType<number> =>
  state.authUser.user?.rating;

export const selectorUserAvatar = (state: AppRootStore): UndefindType<Nullable<string>> =>
  state.authUser.user?.avatar;

export const selectorUserLogin = (state: AppRootStore): UndefindType<string> =>
  state.authUser.user?.login;

export const selectorUserShortInformation = (state: AppRootStore): [string, string][] =>
  createInformationAbout({
    login: state.authUser.user?.login,
    email: state.authUser.user?.email,
    status: state.authUser.user?.status,
    rights: state.authUser.user?.rights,
    rating: state.authUser.user?.rating,
  });
