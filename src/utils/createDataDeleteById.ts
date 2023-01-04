import React from 'react';

import { IdSomeType } from 'types';

export const createDataDeleteById = (id: React.Key[]): IdSomeType => ({
  idSome: id.map(element => element.toString()),
});
