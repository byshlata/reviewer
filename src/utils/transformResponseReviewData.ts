import { ResponseType, ReviewResponseType } from 'types';
import { formattedDate } from 'utils';

export const transformResponseReviewData = (
  response: ResponseType<ReviewResponseType>,
): ResponseType<ReviewResponseType> => ({
  review: {
    ...response.review,
    createdAt: formattedDate(response.review.createdAt),
    updatedAt: formattedDate(response.review.updatedAt),
    comments: response.review.comments.map(comment => ({
      ...comment,
      createdAt: formattedDate(comment.createdAt),
    })),
  },
  appSettings: response.appSettings,
  user: response.user,
});
