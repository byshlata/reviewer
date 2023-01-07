import React, { ReactElement } from 'react';

import { useSelector } from 'react-redux';

import style from './RatingBlock.module.sass';
import { RatingBlockType } from './types/RatingBlockType';

import { AvatarElement, RatingLikeContainer, RatingStarContainer } from 'components';
import { selectorIsAuth } from 'store';

export const RatingBlock = ({
  ratingLike,
  author,
  idReview,
  ratingStar,
}: RatingBlockType): ReactElement => {
  const idAuthUser = useSelector(selectorIsAuth);

  return (
    <div className={style.wrapper}>
      <div className={style.item}>
        <div className={style.itemWrapper}>
          <AvatarElement
            avatar={author.avatar}
            login={author.login}
            rating={author.rating}
          />
          <div className={style.item}>
            <RatingLikeContainer
              rating={ratingLike}
              idReview={idReview}
              idAuthUser={idAuthUser}
            />
          </div>
        </div>
      </div>
      <div className={style.item}>
        <RatingStarContainer
          rating={ratingStar}
          idReview={idReview}
          idAuthUser={idAuthUser}
        />
      </div>
    </div>
  );
};
