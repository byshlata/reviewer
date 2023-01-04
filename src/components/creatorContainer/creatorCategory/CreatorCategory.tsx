import React, { ReactElement, useState } from 'react';

import { Select } from 'antd';

import { CreatorContainer } from '../CreatorContainer';
import { CreatorType } from '../types/CreatorContainerType';

import style from './CreatorCategory.module.sass';

export const CreatorCategory = ({
  defaultValue,
  callback,
  isEdit,
  textButton,
  textLabel,
  labelElement,
  isStart,
  category,
}: CreatorType): ReactElement => {
  const [categoryElement, setCategoryElement] = useState<string>(category || '');

  const onCheckCategory = (value: string): void => {
    setCategoryElement(value);
  };

  const onSaveTags = (): void => {
    if (categoryElement) {
      callback(categoryElement);
    }
  };

  const element = (
    <div className={style.tagsWrapper}>
      <h4 className={style.label}>{labelElement}</h4>
      <h3 className={style.label}>{category}</h3>
    </div>
  );

  return (
    <CreatorContainer
      isEdit={isEdit}
      isStart={isStart}
      textButton={textButton}
      textLabel={textLabel}
      element={element}
      onSaveCallback={onSaveTags}
    >
      <Select
        style={{ width: '7rem' }}
        value={categoryElement}
        onChange={onCheckCategory}
        options={defaultValue.map(value => ({ value, label: value }))}
      />
    </CreatorContainer>
  );
};
