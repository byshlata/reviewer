import { DataReviewType } from 'components/headerReviewPage/types/DataReviewType';

export type CreateHeaderReviewPageType = Partial<Omit<DataReviewType, 'reviewText'>> & {
  isStart: boolean;
  isEdit: boolean;
  defaultCategory?: string[];
  defaultTags?: string[];
  setData?: (data: Partial<Omit<DataReviewType, 'reviewText'>>) => void;
};
