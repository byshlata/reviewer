import { CommentType, ReviewShortType } from 'types';

export type ReviewType = ReviewShortType & {
  reviewText: string;
  comments: CommentType[];
};
