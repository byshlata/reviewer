import { ReviewRatingLikeType, UndefindType } from 'types';

export type RatingLikeContainerType = {
  idReview: string;
  rating: ReviewRatingLikeType;
  idAuthUser: UndefindType<string>;
};
