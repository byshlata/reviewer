import { ReviewRatingLikeType, UndefinedType } from 'types';

export type RatingLikeContainerType = {
  idReview: string;
  rating: ReviewRatingLikeType;
  idAuthUser: UndefinedType<string>;
};
