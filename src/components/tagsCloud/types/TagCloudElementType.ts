import { TagsCloudType } from 'types';

export type TagCloudElementType = {
  data: TagsCloudType[];
  onClick: (payload: TagsCloudType) => void;
};
