import React, { memo, ReactElement } from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import style from './HeaderReviewPage.module.sass';
import { CreateHeaderReviewPageType } from './types/CreateHeaderReviewPageType';

import {
    CreatorCategory,
    CreatorTag,
    TitleEdit,
    TitleNumberEdit,
    UploadImage,
} from 'components';
import { useElementSize, useHeaderReviewPage } from 'hooks';
import { selectorTheme } from 'store';
import { Nullable } from 'types';
import { checkedTags } from 'utils';

export const HeaderReviewPage = memo(
  ({
    titleAbout,
    titleMain,
    isEdit,
    isStart,
    tags,
    image,
    category,
    setData,
    defaultCategory,
    defaultTags,
    authorAssessment,
  }: CreateHeaderReviewPageType): ReactElement => {
    const theme = useSelector(selectorTheme);
    const [squareRef, { height }] = useElementSize();
    const { opacity, zIndex, position } = useHeaderReviewPage(isEdit);
    const { t } = useTranslation();

    const onChangeTitleMain = (titleMainChange: string): void => {
      if (setData) {
        setData({
          titleMain: titleMainChange,
        });
      }
    };

    const onChangeTitleAbout = (titleAboutChange: string): void => {
      if (setData) {
        setData({
          titleAbout: titleAboutChange,
        });
      }
    };

    const onGetImg = (imageChange: Nullable<File>): void => {
      if (setData) {
        setData({
          image: imageChange,
        });
      }
    };

    const onChangeTags = (tagsChange: string[] | string): void => {
      if (typeof tagsChange !== 'string') {
        if (setData) {
          setData({
            tags: checkedTags(tagsChange),
          });
        }
      }
    };

    const onChangeCategory = (categoryChange: string[] | string): void => {
      if (typeof categoryChange === 'string') {
        if (setData) {
          setData({
            category: categoryChange,
          });
        }
      }
    };

    const onChangeAssessment = (authorAssessmentChange: number): void => {
      if (setData) {
        setData({
          authorAssessment: authorAssessmentChange,
        });
      }
    };

    return (
      <div style={{ minHeight: `${height}px` }} className={style.titleWrapper}>
        <div
          style={{
            opacity,
          }}
          className={style.uploadWrapper}
        >
          <UploadImage onGetImage={onGetImg} image={image} isEdit={isEdit} />
        </div>
        <div
          ref={squareRef}
          style={{
            backgroundColor: theme.token.colorOther,
            zIndex,
            position,
            color: theme.token.colorText,
          }}
          className={style.titlePosition}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              minHeight: '350px',
            }}
          >
            <div>
              <div className={style.pageCreateWrapper}>
                <div className={style.elementItem}>
                  <TitleEdit
                    isStart={isStart}
                    sizeTitle={2}
                    placeholderInput={t('reviewTitlePlaceholder')}
                    textButton={t('save')}
                    textLabel={t('reviewTitle')}
                    title={titleMain || ''}
                    isEdit={isEdit}
                    callback={onChangeTitleMain}
                  />
                </div>
                <div className={style.elementItem}>
                  <TitleEdit
                    isStart={isStart}
                    sizeTitle={1.5}
                    placeholderInput={t('reviewAboutPlaceholder')}
                    textButton={t('save')}
                    textLabel={t('reviewAbout')}
                    title={titleAbout || ''}
                    isEdit={isEdit}
                    callback={onChangeTitleAbout}
                  />
                </div>
                <div className={style.elementItem}>
                  <TitleNumberEdit
                    isStart={isStart}
                    sizeTitle={1}
                    placeholderInput={t('reviewAuthorAssessment')}
                    textButton={t('save')}
                    textLabel={t('reviewAuthorAssessment')}
                    assessment={authorAssessment || 0}
                    isEdit={isEdit}
                    callback={onChangeAssessment}
                  />
                </div>
                <div className={style.elementItem}>
                  <CreatorCategory
                    category={category}
                    isStart={isStart}
                    labelElement={t('reviewCategory')}
                    textLabel={t('reviewCategoryPlaceholder')}
                    defaultValue={defaultCategory || []}
                    isEdit={isEdit}
                    textButton={t('save')}
                    callback={onChangeCategory}
                  />
                </div>
              </div>
            </div>

            <div>
              <div className={style.elementItem}>
                <CreatorTag
                  isStart={isStart}
                  labelElement={t('tags')}
                  textLabel={t('tags')}
                  defaultValue={defaultTags || []}
                  isEdit={isEdit}
                  textButton={t('save')}
                  callback={onChangeTags}
                  checkTags={tags}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  },
);
