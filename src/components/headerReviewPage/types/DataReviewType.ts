import { Nullable } from 'types';

export type DataReviewType = {
  idUser: string;
  titleMain: string;
  titleAbout: string;
  category: string;
  reviewText: string;
  tags: string[];
  authorAssessment: number;
  image?: Nullable<File | string>;
};
