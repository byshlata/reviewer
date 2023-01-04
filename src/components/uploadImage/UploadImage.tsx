import React, { ReactElement, useEffect, useState } from 'react';

import { UploadOutlined } from '@ant-design/icons';
import { FileUploader } from 'react-drag-drop-files';
import { useSelector } from 'react-redux';

import { UploadImageType } from './types/UploadImageType';
import style from './UploadImage.module.sass';

import { selectorTheme } from 'store';
import { Nullable } from 'types';

const reader = new FileReader();
const fileTypes = ['JPG', 'PNG', 'GIF'];

export const UploadImage = ({
  onGetImage,
  isEdit,
  image,
}: UploadImageType): ReactElement => {
  const theme = useSelector(selectorTheme);
  const [file, setFile] = useState<Nullable<File>>(null);
  const [url, setUrl] = useState<string | File | ArrayBuffer | null | undefined>(image);
  useEffect(() => {
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setUrl(reader.result);
      };
    }
  }, [file]);

  const handleChange = (fileLoad: Nullable<File>): void => {
    setFile(fileLoad);
    onGetImage(fileLoad);
  };

  const cursor = isEdit ? 'pointer' : '';
  return (
    <div className={style.uploadWrapper}>
      {isEdit ? (
        <FileUploader handleChange={handleChange} name="file" types={fileTypes}>
          <div
            style={{
              backgroundImage: `url(${url})`,
              cursor: `${cursor}`,
            }}
            className={style.upload}
          >
            <UploadOutlined />
          </div>
        </FileUploader>
      ) : (
        <div
          style={{
            backgroundImage: `url(${image})`,
            backgroundColor: theme.token.colorPrimary,
          }}
          className={style.upload}
        />
      )}
    </div>
  );
};
