import React, { ReactElement } from 'react';

import { DataTime, HeaderReviewPage, RatingBlock, TextAreaMarkDown } from 'components';
import { ReviewType } from 'pages/review/types/ReviewType';

export const Review = ({ data, isStart, isEdit }: ReviewType): ReactElement => (
  <div>
    {data && (
      <>
        <HeaderReviewPage
          titleMain={data?.review.titleMain}
          titleAbout={data?.review.titleAbout}
          category={data?.review.category}
          tags={data?.review.tags}
          image={data?.review.image}
          authorAssessment={data?.review.authorAssessment}
          isStart={isStart}
          isEdit={isEdit}
        />
        <DataTime data={data.review.createdAt} />
        <RatingBlock
          idReview={data.review.id}
          author={data.review.author}
          ratingLike={data.review.ratingLike}
          ratingStar={data.review.ratingStar}
        />
        <TextAreaMarkDown
          isStart={isStart}
          isEdit={isEdit}
          startText={data?.review.reviewText}
        />
      </>
    )}
  </div>
);
