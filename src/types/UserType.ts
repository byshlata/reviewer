import { RightsType, StatusType } from 'types';

export type UserType = {
  id: string;
  avatar: string;
  login: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  status: StatusType;
  rights: RightsType;
  rating: number;
};
