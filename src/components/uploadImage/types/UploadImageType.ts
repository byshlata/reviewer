import { Nullable } from 'types';

export type UploadImageType = {
  onGetImage: (file: Nullable<File>) => void;
  isEdit?: boolean;
  image?: Nullable<string | File>;
};
