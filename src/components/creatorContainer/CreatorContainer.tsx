import React, { ReactElement, useState } from 'react';

import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import style from './CreatorContainer.module.sass';
import { CreatorContainerType } from './types/CreatorContainerType';

export const CreatorContainer = ({
  onSaveCallback,
  isEdit,
  textButton,
  textLabel,
  children,
  element,
  isStart,
}: CreatorContainerType): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(isStart);

  const onEdit = (): void => {
    setIsOpen(!isOpen);
  };
  const onSave = (): void => {
    onSaveCallback();
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen && isStart ? (
        <div className={style.inputWrapper}>
          <div className={style.itemWrapper}>
            <h4 className={style.title}>{textLabel}</h4>
            {children}
          </div>
          <Button type="primary" onClick={onSave}>
            {textButton}
          </Button>
        </div>
      ) : (
        <div className={style.editWrapper}>
          {element}
          {isEdit && <Button type="text" icon={<EditOutlined />} onClick={onEdit} />}
        </div>
      )}
    </div>
  );
};
