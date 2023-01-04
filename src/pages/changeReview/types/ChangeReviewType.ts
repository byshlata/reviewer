import { DataReviewType } from 'components/headerReviewPage/types/DataReviewType';

export type ChangeReviewType = {
  dataReview: DataReviewType;
  titleSuccess: string;
  urlRequest: string;
  idReview?: string;
};
