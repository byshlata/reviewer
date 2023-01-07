import { AppRootStore } from 'store';
import { Nullable, RightsType, UndefinedType } from 'types';
import { createInformationAbout } from 'utils';

export const selectorIsAuth = (state: AppRootStore): UndefinedType<string> =>
  state.authUser.user?.id;

export const selectorUserRights = (state: AppRootStore): UndefinedType<RightsType> =>
  state.authUser.user?.rights;

export const selectorUserRating = (state: AppRootStore): UndefinedType<number> =>
  state.authUser.user?.rating;

export const selectorUserAvatar = (
  state: AppRootStore,
): UndefinedType<Nullable<string>> => state.authUser.user?.avatar;

export const selectorUserLogin = (state: AppRootStore): UndefinedType<string> =>
  state.authUser.user?.login;

export const selectorUserShortInformation = (state: AppRootStore): [string, string][] =>
  createInformationAbout({
    login: state.authUser.user?.login,
    email: state.authUser.user?.email,
    status: state.authUser.user?.status,
    rights: state.authUser.user?.rights,
    rating: state.authUser.user?.rating,
  });
