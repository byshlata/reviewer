import { RightsType } from 'types/RightsType';
import { StatusType } from 'types/StatusType';

export type AdminTableType = {
  idUser: string;
  login: string;
  rating: number;
  status: StatusType;
  rights: RightsType;
  numberReview: number;
};
