import { UserType } from 'types';

export type CommentType = {
  _id: string;
  author: UserType;
  text: string;
  createdAt: string;
  updatedAt: string;
  _v: number;
};
