import _ from 'lodash';

export const breakIntoGroups = (array: string[]): string[][] =>
  _.values(_.groupBy(array));
