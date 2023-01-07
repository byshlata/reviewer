import { UndefinedType } from 'types';

type InputType = {
  idUser: UndefinedType<string>;
  idUsers: string[];
};

export const isStatusRating = ({ idUsers, idUser }: InputType): boolean =>
  idUsers.indexOf(idUser || '') !== -1;
