import { UndefindType } from 'types';

type InputType = {
  idUser: UndefindType<string>;
  isUsers: string[];
};

export const isStatusRating = ({ isUsers, idUser }: InputType): boolean =>
  idUser ? !!isUsers.find(id => id === idUser) : !idUser;
