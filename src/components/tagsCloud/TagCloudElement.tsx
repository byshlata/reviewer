import React, { ReactElement } from 'react';

import { useSelector } from 'react-redux';
import { TagCloud } from 'react-tagcloud';

import style from './TagCloudElement.module.sass';
import { TagCloudElementType } from './types/TagCloudElementType';

import { selectorTheme } from 'store';

export const TagCloudElement = ({ data, onClick }: TagCloudElementType): ReactElement => {
  const theme = useSelector(selectorTheme);
  const customRenderer = (tag: any, size: any): ReactElement => (
    <div
      key={tag.value}
      style={{
        fontSize: `${size}px`,
        height: `${size}px`,
        backgroundColor: theme.token.colorPrimary,
        color: theme.token.colorText,
      }}
      className={style.item}
    >
      #{tag.value}
    </div>
  );

  return (
    <TagCloud
      minSize={12}
      maxSize={25}
      tags={data}
      className={style.wrapper}
      onClick={onClick}
      renderer={customRenderer}
    />
  );
};
