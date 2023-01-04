import { TagsCloudType } from 'types';

export const createValueTagsCloud = (arr: string[][]): TagsCloudType[] =>
  arr.map(tags => ({ value: tags[0], count: tags.length }));
