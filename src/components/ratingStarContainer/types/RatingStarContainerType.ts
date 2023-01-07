import { ReviewRatingStarType, UndefinedType } from 'types';

export type RatingStarContainerType = {
  idReview: string;
  rating: ReviewRatingStarType;
  idAuthUser: UndefinedType<string>;
};
