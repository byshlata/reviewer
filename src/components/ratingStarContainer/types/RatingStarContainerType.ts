import { ReviewRatingStarType, UndefindType } from 'types';

export type RatingStarContainerType = {
  idReview: string;
  rating: ReviewRatingStarType;
  idAuthUser: UndefindType<string>;
};
