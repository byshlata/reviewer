import React, { ReactElement } from 'react';

import { useSearchParams } from 'react-router-dom';

import { PreviewReview } from 'components';
import { QueryAPI } from 'enums';
import { useGetReviewsParamsQuery } from 'store';

export const ReviewQueryParam = (): ReactElement => {
  const [queryParams] = useSearchParams();

  const tag = queryParams.get(`${QueryAPI.Tag}`)
    ? queryParams.get(`${QueryAPI.Tag}`)
    : undefined;

  const dataParam = queryParams.get(`${QueryAPI.Data}`)
    ? queryParams.get(`${QueryAPI.Data}`)
    : undefined;

  const rating = queryParams.get(`${QueryAPI.Rating}`)
    ? queryParams.get(`${QueryAPI.Rating}`)
    : undefined;

  const { data } = useGetReviewsParamsQuery({ tag, data: dataParam, rating });
  return <span>{data?.reviews && <PreviewReview dataReview={data.reviews} />}</span>;
};
