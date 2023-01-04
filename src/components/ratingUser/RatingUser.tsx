import React, { ReactElement } from 'react';

import { StarTwoTone } from '@ant-design/icons';

import style from './RatingUser.module.sass';
import { RatingUserType } from './types/RatingUserType';

export const RatingUser = ({ rating, title }: RatingUserType): ReactElement | null => (
  <span>
    {rating ? (
      <div className={style.wrapper}>
        <b>{title}</b>
        <StarTwoTone />
        <span className={style.rating}>{rating}</span>
      </div>
    ) : null}
  </span>
);
