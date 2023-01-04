import React, { ReactElement } from 'react';

import { useTranslation } from 'react-i18next';

import { DataReviewType } from 'components/headerReviewPage/types/DataReviewType';
import { PathAPI } from 'enums';
import { useParamsSkip } from 'hooks';
import { ChangeReview } from 'pages/changeReview/ChangeReview';
import { useGetReviewQuery } from 'store';

export const EditReview = (): ReactElement => {
  const { skip, value } = useParamsSkip();
  const { t } = useTranslation();
  const { data } = useGetReviewQuery(
    {
      id: value,
    },
    { skip },
  );

  // @ts-ignore
  const dataReview: DataReviewType = data && {
    reviewText: data.review.reviewText,
    idUser: data.review.id,
    tags: data.review.tags,
    image: data.review.image,
    category: data.review.category,
    titleAbout: data.review.titleAbout,
    titleMain: data.review.titleMain,
    authorAssessment: data.review.authorAssessment,
  };

  return (
    <div>
      {data && (
        <ChangeReview
          urlRequest={`${PathAPI.EditReview}`}
          titleSuccess={t('successEdit')}
          dataReview={dataReview}
          idReview={data?.review.id}
        />
      )}
    </div>
  );
};
