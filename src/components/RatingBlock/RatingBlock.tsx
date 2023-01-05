import React, { ReactElement } from 'react';

import { useSelector } from 'react-redux';

import style from './RatingBlock.module.sass';

import { AvatarElement, RatingLikeContainer, RatingStarContainer } from 'components';
import { selectorIsAuth } from 'store';
import { ReviewRatingLikeType, ReviewRatingStarType, UserType } from 'types';

type RatingBlockType = {
  idReview: string;
  author: UserType;
  ratingLike: ReviewRatingLikeType;
  ratingStar: ReviewRatingStarType;
};

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
