import React, { ReactElement } from 'react';

import { Rate } from 'antd';

import style from './RatingStar.module.sass';
import { RatingStarType } from './types/RatingStarType';

export const RatingStar = ({
  rating,
  changeRating,
  disable,
}: RatingStarType): ReactElement => (
  <div className={style.starWrapper}>
    {rating ? <span className={style.itemStar}>{rating}</span> : null}
    <Rate
      allowHalf
      className={style.antRateStarFirst}
      onChange={changeRating}
      value={rating}
      disabled={disable}
    />
  </div>
);
