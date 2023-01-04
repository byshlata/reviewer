import { ReviewResponseType, UndefindType } from 'types';

export type ReviewType = {
  data: UndefindType<ReviewResponseType>;
  isStart: boolean;
  isEdit: boolean;
};
