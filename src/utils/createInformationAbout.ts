import { ObjectSimpleType } from 'types';
import { createKeys } from 'utils';

export const createInformationAbout = (obj: ObjectSimpleType): [string, string][] =>
  obj ? createKeys(obj).map(key => [`${key}`, obj[`${key}`]]) : [];
