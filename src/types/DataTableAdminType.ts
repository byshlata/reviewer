import React from 'react';

import { RightsType, StatusType } from 'types';

export type DataTableAdminType = {
  key: React.Key;
  login: string;
  rating: number;
  status: StatusType;
  rights: RightsType;
  numberReview: number;
  seeReviews: string;
};
