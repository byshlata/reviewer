import React, { ReactElement } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import style from './PreviewReview.module.sass';
import { PreviewReviewType } from './types/PreviewReviewType';

import { DataTime, HeaderReviewPage, IdButton, RatingBlock } from 'components';
import { Path } from 'enums';

export const PreviewReview = ({ dataReview }: PreviewReviewType): ReactElement => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const onWatchReview = (id: string): void => {
    navigate(`${Path.Review}${Path.Root}${id}`);
  };

  return (
    <div className={style.wrapper}>
      {dataReview.map(
        ({
          authorAssessment,
          ratingStar,
          ratingLike,
          image,
          category,
          author,
          titleAbout,
          titleMain,
          tags,
          id,
          createdAt,
        }) => (
          <div key={id} className={style.item}>
            <div className={style.headerPreviewItem}>
              <HeaderReviewPage
                isStart={false}
                isEdit={false}
                titleAbout={titleAbout}
                image={image}
                titleMain={titleMain}
                category={category}
                tags={tags}
                authorAssessment={authorAssessment}
              />
              <div className={style.button}>
                <IdButton
                  textButton={t('watchReview')}
                  id={id}
                  callback={onWatchReview}
                />
              </div>
            </div>
            <DataTime data={createdAt} />

            <RatingBlock
              idReview={id}
              author={author}
              ratingLike={ratingLike}
              ratingStar={ratingStar}
            />
          </div>
        ),
      )}
    </div>
  );
};
