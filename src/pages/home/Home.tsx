import React, { ReactElement } from 'react';

import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import style from './Home.module.sass';

import { PreviewReview, TagCloudElement } from 'components';
import { AppSettings, Path, QueryAPI } from 'enums';
import { useAuthSocial, useTagsCloud } from 'hooks';
import { selectorTheme, useGetReviewsParamsQuery } from 'store';
import { TagsCloudType } from 'types';

export const Home = (): ReactElement => {
  const theme = useSelector(selectorTheme);

  const { t } = useTranslation();
  const navigate = useNavigate();
  const { tagsOut } = useTagsCloud();

  useAuthSocial();

  const { data } = useGetReviewsParamsQuery({
    count: AppSettings.CountStartHomePageReview,
    data: AppSettings.SortUp.toString(),
    rating: AppSettings.SortUp.toString(),
  });

  const onClickTag = (tag: TagsCloudType): void => {
    navigate(`${Path.Reviews}?${QueryAPI.Tag}=${tag.value}`);
  };

  const onClickSortData = (): void => {
    navigate(`${Path.Reviews}?${QueryAPI.Data}=${AppSettings.SortUp}`);
  };

  const onClickSortRating = (): void => {
    navigate(`${Path.Reviews}?${QueryAPI.Rating}=${AppSettings.SortUp}`);
  };

  return (
    <div className={style.wrapper}>
      <div
        style={{ backgroundColor: theme.token.colorOther }}
        className={style.tagsWrapper}
      >
        <TagCloudElement onClick={onClickTag} data={tagsOut} />
      </div>

      {data && (
        <>
          <Button
            className={style.sortButton}
            size="large"
            type="text"
            onClick={onClickSortData}
          >
            {t('sortData')}
            <ArrowRightOutlined />
          </Button>
          <PreviewReview dataReview={data?.reviewsSortData || []} />
        </>
      )}

      {data && (
        <>
          <Button
            className={style.sortButton}
            size="large"
            type="text"
            onClick={onClickSortRating}
          >
            {t('sortRating')}
            <ArrowRightOutlined />
          </Button>
          <PreviewReview dataReview={data?.reviewsSortRating || []} />
        </>
      )}
    </div>
  );
};
