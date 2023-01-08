import React, { memo, ReactElement } from 'react';

import { RatingStarContainerType } from './types/RatingStarContainerType';

import { RatingStar } from 'components';
import { useSetStarMutation } from 'store';
import { isStatusRating } from 'utils';

export const RatingStarContainer = memo(
  ({ rating, idAuthUser, idReview }: RatingStarContainerType): ReactElement => {
    const [setStar, { isLoading }] = useSetStarMutation();
    const onChangeRating = (numberStar: number): void => {
      if (idAuthUser) {
        if (numberStar === 0) {
          setStar({ numberStar: 5, idReview });
        } else {
          setStar({ numberStar, idReview });
        }
      }
    };

    const disable =
      isStatusRating({ idUser: idAuthUser, idUsers: rating.idUsers }) || isLoading;

    return (
      <RatingStar
        disable={disable}
        rating={rating.averageRating}
        changeRating={onChangeRating}
      />
    );
  },
);
