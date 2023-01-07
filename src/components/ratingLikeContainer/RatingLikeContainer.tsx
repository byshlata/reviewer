import React, { memo, ReactElement } from 'react';

import { RatingLikeContainerType } from './types/RatingLikeContainerType';

import { RatingLike } from 'components';
import { useSetLikeMutation } from 'store';
import { isStatusRating } from 'utils';

export const RatingLikeContainer = memo(
  ({ rating, idAuthUser, idReview }: RatingLikeContainerType): ReactElement => {
    const [setLike, { isLoading }] = useSetLikeMutation();
    const isLikeStatus = isStatusRating({ idUser: idAuthUser, idUsers: rating.idUsers });
    const onChangeLike = (): void => {
      if (idAuthUser) {
        setLike({ idReview });
      }
    };

    return (
      <RatingLike
        rating={rating.countLike}
        changeRating={onChangeLike}
        isLake={isLikeStatus}
        disable={isLoading}
      />
    );
  },
);
