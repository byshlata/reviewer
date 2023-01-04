import { RcFile } from 'antd/es/upload/interface';

import { Nullable, UndefindType } from 'types';

export type UploadAvatarType = {
  onGetImage?: (image: RcFile) => void;
  isLoading: boolean;
  avatar: UndefindType<Nullable<string>>;
};
