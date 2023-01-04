import React, { ReactElement } from 'react';

import { LikeFilled, LikeOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import style from './RatingLike.module.sass';
import { RatingLikeType } from './types/RatingLikeType';

export const RatingLike = ({
  rating,
  isLake,
  changeRating,
  disable,
}: RatingLikeType): ReactElement => (
  <div className={style.likeWrapper}>
    {rating ? <div className={style.itemLike}>{rating}</div> : null}
    <Button
      icon={isLake ? <LikeFilled /> : <LikeOutlined />}
      type="dashed"
      disabled={disable}
      onClick={changeRating}
    />
  </div>
);
