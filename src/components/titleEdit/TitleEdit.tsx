import React, { ChangeEvent, ReactElement, useState } from 'react';

import { EditOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';

import style from './TitleEdit.module.sass';
import { TitleEditType } from './types/TitleEditType';

export const TitleEdit = ({
  isEdit,
  callback,
  title,
  children,
  placeholderInput,
  textButton,
  textLabel,
  sizeTitle,
  isStart,
}: TitleEditType): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(isStart);
  const [value, setValue] = useState<string>(title);

  const onEdit = (): void => {
    setIsOpen(!isOpen);
  };

  const onSave = (): void => {
    if (value) {
      callback(value);
      setIsOpen(!isOpen);
    }
  };

  const onChangeText = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.currentTarget.value);
  };

  return (
    <div className={style.wrapper}>
      {isOpen && isEdit ? (
        <div className={style.inputWrapper}>
          <div className={style.itemWrapper}>
            <h4 className={style.title}>{textLabel}</h4>
            <Input
              showCount
              value={value}
              defaultValue={title}
              maxLength={70}
              placeholder={placeholderInput}
              onChange={onChangeText}
            />
          </div>
          <Button type="primary" onClick={onSave}>
            {textButton}
          </Button>
        </div>
      ) : (
        <div className={style.wrapper}>
          <div className={style.titleItem}>
            <h2 style={{ fontSize: `${sizeTitle}rem` }} className={style.title}>
              {title}
            </h2>
            {children}
            {isEdit && <Button type="text" icon={<EditOutlined />} onClick={onEdit} />}
          </div>
        </div>
      )}
    </div>
  );
};
