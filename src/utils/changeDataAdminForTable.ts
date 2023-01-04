import { DataTableAdminType } from 'types';
import { AdminTableType } from 'types/AdminTableType';

export const changeDataAdminForTable = (
  reviews: AdminTableType[],
): DataTableAdminType[] =>
  reviews.map(({ rating, login, numberReview, idUser, status, rights }) => ({
    key: idUser,
    login,
    rating,
    status,
    rights,
    seeReviews: '',
    numberReview,
  }));
