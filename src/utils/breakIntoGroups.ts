import _ from 'lodash';

export const breakIntoGroups = (array: any[]): any[][] => _.values(_.groupBy(array));
