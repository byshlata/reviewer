import { ResponseType, ReviewsGetType, ReviewShortType } from 'types';
import { formattedDate } from 'utils';

export const transformResponseShortReviewData = (
  response: ResponseType<ReviewsGetType<ReviewShortType[]>>,
): ResponseType<ReviewsGetType<ReviewShortType[]>> => ({
  reviewsSortData: response.reviewsSortData.map(review => ({
    ...review,
    createdAt: formattedDate(review.createdAt),
    updatedAt: formattedDate(review.updatedAt),
  })),
  reviewsSortRating: response.reviewsSortRating.map(review => ({
    ...review,
    createdAt: formattedDate(review.createdAt),
    updatedAt: formattedDate(review.updatedAt),
  })),
  reviewsTag: response.reviewsTag.map(review => ({
    ...review,
    createdAt: formattedDate(review.createdAt),
    updatedAt: formattedDate(review.updatedAt),
  })),
  appSettings: response.appSettings,
  user: response.user,
});
