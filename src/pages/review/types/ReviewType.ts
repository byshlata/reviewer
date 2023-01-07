import { ReviewResponseType, UndefinedType } from 'types';

export type ReviewType = {
  data: UndefinedType<ReviewResponseType>;
  isStart: boolean;
  isEdit: boolean;
};
