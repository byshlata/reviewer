import { Nullable, UndefindType } from 'types';

export type AvatarElementType = {
  avatar: UndefindType<Nullable<string>>;
  login?: UndefindType<string>;
  rating: UndefindType<number>;
};
