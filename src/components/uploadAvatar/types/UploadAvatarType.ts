import { RcFile } from 'antd/es/upload/interface';

import { Nullable, UndefinedType } from 'types';

export type UploadAvatarType = {
  onGetImage?: (image: RcFile) => void;
  isLoading: boolean;
  avatar: UndefinedType<Nullable<string>>;
};
