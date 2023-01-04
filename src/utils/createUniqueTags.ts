import { TagsCloudType } from 'types';

export const createUniqueTags = (tags: TagsCloudType[]): string[] =>
  Array.from(new Set(tags.map(({ value }) => value)));
