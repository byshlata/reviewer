import { ResponseType, ReviewShortType, ReviewsSomeResponseType } from 'types';
import { formattedDate } from 'utils';

export const transformResponseShortReviewData = (
  response: ResponseType<ReviewsSomeResponseType<ReviewShortType>>,
): ResponseType<ReviewsSomeResponseType<ReviewShortType>> => ({
  reviews: response.reviews.map(review => ({
    ...review,
    createdAt: formattedDate(review.createdAt),
    updatedAt: formattedDate(review.updatedAt),
  })),
  appSettings: response.appSettings,
  user: response.user,
});
