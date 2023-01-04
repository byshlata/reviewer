import React, { ReactElement, useEffect } from 'react';

import { ArrowRightOutlined } from '@ant-design/icons';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import style from './Home.module.sass';

import { PreviewReview, TagCloudElement } from 'components';
import { AppSettings, Path, QueryAPI } from 'enums';
import { useTagsCloud } from 'hooks/useTagsCloud';
import {
  selectorTagsForCloud,
  selectorTheme,
  useAuthSocialMutation,
  useGetReviewsParamsQuery,
} from 'store';
import { TagsCloudType } from 'types';

const REVIEW_FIRST_REQUEST = 2;

export const Home = (): ReactElement => {
  const tags = useSelector(selectorTagsForCloud);
  const theme = useSelector(selectorTheme);
  const { user } = useAuth0();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { tagsOut } = useTagsCloud(tags);

  const [authSocialAccount] = useAuthSocialMutation({});

  useEffect(() => {
    if ((user?.given_name || user?.nickname) && user?.email) {
      const login = user?.given_name || user?.nickname;
      authSocialAccount({
        password: '123',
        login: login || '',
        email: user.email,
        avatar: user.picture,
      });
    }
  }, [user]);

  const { data } = useGetReviewsParamsQuery(
    {
      count: AppSettings.CountStartHomePageReview,
      data: AppSettings.SortUp.toString(),
      rating: AppSettings.SortUp.toString(),
    },
    { pollingInterval: 10000 },
  );

  const reviewSortByData = data?.reviews.slice(0, AppSettings.CountStartHomePageReview);
  const reviewSortByRating = data?.reviews.slice(
    AppSettings.CountStartHomePageReview,
    AppSettings.CountStartHomePageReview * REVIEW_FIRST_REQUEST,
  );

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
      <Button
        className={style.sortButton}
        size="large"
        type="text"
        onClick={onClickSortData}
      >
        {t('sortData')}
        <ArrowRightOutlined />
      </Button>
      {data && <PreviewReview dataReview={reviewSortByData || []} />}
      <Button
        className={style.sortButton}
        size="large"
        type="text"
        onClick={onClickSortRating}
      >
        {t('sortRating')}
        <ArrowRightOutlined />
      </Button>
      {data && <PreviewReview dataReview={reviewSortByRating || []} />}
    </div>
  );
};
