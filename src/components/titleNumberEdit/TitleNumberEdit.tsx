import React, { ReactElement, useState } from 'react';

import { EditOutlined } from '@ant-design/icons';
import { Button, InputNumber } from 'antd';

import style from 'components/titleNumberEdit/TitleNumberEdit.module.sass';
import { TitleNumberEditType } from 'components/titleNumberEdit/types/TitleNumberEditType';
import { AppSettings } from 'enums';
import { Nullable } from 'types';

export const TitleNumberEdit = ({
  isEdit,
  callback,
  assessment,
  children,
  placeholderInput,
  textButton,
  textLabel,
  sizeTitle,
  isStart,
}: TitleNumberEditType): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(isStart);
  const [value, setValue] = useState<Nullable<number>>(assessment);

  const onEdit = (): void => {
    setIsOpen(!isOpen);
  };

  const onSave = (): void => {
    if (value) {
      callback(value);
      setIsOpen(!isOpen);
    }
  };

  const onChangeText = (valueInput: Nullable<number>): void => {
    setValue(valueInput);
  };

  return (
    <div className={style.wrapper}>
      {isOpen && isEdit ? (
        <div className={style.inputWrapper}>
          <div className={style.itemWrapper}>
            <h4 className={style.title}>{textLabel}</h4>
            <InputNumber
              value={value}
              max={AppSettings.MaxAssessment}
              min={AppSettings.MinAssessment}
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
              {placeholderInput} {assessment}
            </h2>
            {children}
            {isEdit && <Button type="text" icon={<EditOutlined />} onClick={onEdit} />}
          </div>
        </div>
      )}
    </div>
  );
};
