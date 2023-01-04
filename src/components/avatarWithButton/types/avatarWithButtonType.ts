import { AvatarElementType } from 'components/avatarElement/types/AvatarElementType';

export type AvatarWithButtonType = AvatarElementType & {
  onLogin: () => void;
  onLogout: () => void;
  isAuth: boolean;
};
