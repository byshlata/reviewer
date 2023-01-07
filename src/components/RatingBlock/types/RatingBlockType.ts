import { ReviewRatingLikeType, ReviewRatingStarType, UserType } from 'types';

export type RatingBlockType = {
  idReview: string;
  author: UserType;
  ratingLike: ReviewRatingLikeType;
  ratingStar: ReviewRatingStarType;
};
