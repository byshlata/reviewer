import { DataTableUserType, ReviewUserTableType } from 'types';

export const changeDataUserForTable = (
  reviews: ReviewUserTableType[],
): DataTableUserType[] =>
  reviews.map(
    ({ titleMain, id, authorAssessment, ratingLike, ratingStar, createdAt }) => ({
      dataCreate: createdAt,
      key: id,
      authorAssessment,
      ratingLike,
      ratingStar,
      titleMain,
      action: '',
    }),
  );
