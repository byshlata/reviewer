import { AppSettingsResponseType, ReviewsGetType, ReviewShortType } from 'types';
import { formattedDate } from 'utils';

export const transformResponseShortReviewData = (
  response: AppSettingsResponseType & ReviewsGetType<ReviewShortType[]>,
): AppSettingsResponseType & ReviewsGetType<ReviewShortType[]> => ({
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
});
