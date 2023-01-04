import { RightsType } from 'types/RightsType';
import { StatusType } from 'types/StatusType';

export type UserShortCommentType = {
  _id: string;
  avatar: string;
  login: string;
  status: StatusType;
  rights: RightsType;
  rating: number;
};
