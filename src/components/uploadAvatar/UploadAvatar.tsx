import React, { ReactElement, useEffect, useState } from 'react';

import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

import { UploadAvatarType } from './types/UploadAvatarType';
import style from './UploadAvatar.module.sass';

import { Nullable, UndefinedType } from 'types';
import { beforeUpload, getBase64 } from 'utils';

export const UploadAvatar = ({
  onGetImage,
  isLoading,
  avatar,
}: UploadAvatarType): ReactElement => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<UndefinedType<Nullable<string>>>(avatar);
  const [file, setFile] = useState<RcFile>();

  useEffect(() => {
    if (avatar) {
      setImageUrl(avatar);
    }
  }, [avatar]);

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setImageUrl('');
      setLoading(true);
      setFile(info.file.originFileObj);
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj as RcFile, url => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const onChangeAvatar = (): void => {
    if (file && onGetImage) {
      onGetImage(file);
    }
    setImageUrl(imageUrl);
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div className={style.container}>
      <Upload
        style={{ display: 'flex', justifyContent: 'center' }}
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
        disabled={isLoading}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="avatar" style={{ width: '100%', height: '100%' }} />
        ) : (
          uploadButton
        )}
      </Upload>
      <Button
        style={{ marginTop: '1.5rem' }}
        type="primary"
        onClick={onChangeAvatar}
        disabled={!imageUrl || isLoading || imageUrl === avatar}
      >
        Change Avatar
      </Button>
    </div>
  );
};
