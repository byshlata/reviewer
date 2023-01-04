import { ReviewRatingLikeType, ReviewRatingStarType, UserType } from 'types';

export type ReviewShortType = {
  id: string;
  author: UserType;
  titleMain: string;
  titleAbout: string;
  category: string;
  tags: string[];
  image?: string;
  authorAssessment: number;
  ratingStar: ReviewRatingStarType;
  ratingLike: ReviewRatingLikeType;
  createdAt: string;
  updatedAt: string;
};
