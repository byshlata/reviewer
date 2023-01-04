import React, { ReactElement } from 'react';

import { useTranslation } from 'react-i18next';

import { PathAPI } from 'enums';
import { ChangeReview } from 'pages/changeReview/ChangeReview';

const EMPTY_REVIEW_DATA = {
  idUser: '',
  titleAbout: '',
  titleMain: '',
  tags: [],
  image: '',
  category: '',
  authorAssessment: 0,
  reviewText: '',
};

export const CreateReview = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <ChangeReview
      urlRequest={`${PathAPI.CreateReview}`}
      titleSuccess={t('successCreate')}
      dataReview={EMPTY_REVIEW_DATA}
    />
  );
};
