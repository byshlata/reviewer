import React, { ReactElement, useState } from 'react';

import { Select, Tag } from 'antd';
import { useSelector } from 'react-redux';

import { CreatorContainer } from '../CreatorContainer';
import { CreatorType } from '../types/CreatorContainerType';

import style from './CreatorTag.module.sass';

import { selectorTheme } from 'store';
import { UndefindType } from 'types';

export const CreatorTag = ({
  defaultValue,
  callback,
  isEdit,
  textButton,
  textLabel,
  labelElement,
  checkTags,
  isStart,
}: CreatorType): ReactElement => {
  const [tags, setTags] = useState<UndefindType<string[]>>(checkTags);
  const theme = useSelector(selectorTheme);
  const onAddTag = (value: string[]): void => {
    setTags(value);
  };

  const onSaveTags = (): void => {
    if (tags) {
      callback(tags);
    }
  };

  const element = (
    <div className={style.tagsWrapper}>
      {!tags?.length || (isEdit && <h4 className={style.label}>{labelElement}</h4>)}
      {tags?.map(label => (
        <Tag
          key={label}
          style={{ marginBottom: '3px', color: theme.token.colorText }}
          color={theme.token.colorPrimary}
        >
          #{label}
        </Tag>
      ))}
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
        mode="tags"
        defaultValue={tags?.map(value => value)}
        onChange={onAddTag}
        options={defaultValue.map(value => ({ value, label: value }))}
      />
    </CreatorContainer>
  );
};
