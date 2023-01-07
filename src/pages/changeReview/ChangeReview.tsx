import React, { ReactElement, useEffect, useState } from 'react';

import { Button, message } from 'antd';
import { ResultStatusType } from 'antd/es/result';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { DataReviewType } from '../../components/headerReviewPage/types/DataReviewType';

import { HeaderReviewPage, ResultElement, TextAreaMarkDown } from 'components';
import { Path } from 'enums';
import { ChangeReviewType } from 'pages/changeReview/types/ChangeReviewType';
import {
  selectorAppSettingsCategory,
  selectorAppUniqueTags,
  useCreateReviewMutation,
} from 'store';

const EMPTY_REVIEW_DATA: DataReviewType = {
  idUser: '',
  titleAbout: '',
  titleMain: '',
  tags: [],
  image: '',
  category: '',
  authorAssessment: 0,
  reviewText: '',
};

export const ChangeReview = ({
  dataReview,
  titleSuccess,
  urlRequest,
  idReview,
}: ChangeReviewType): ReactElement => {
  const appSettingsCategory = useSelector(selectorAppSettingsCategory);
  const appSettingsTags = useSelector(selectorAppUniqueTags);
  const { t } = useTranslation();
  const [reviewData, setReviewData] = useState<DataReviewType>(dataReview);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isSendRequest, setIsSendRequest] = useState<boolean>(false);
  const [status, setStatus] = useState<ResultStatusType>('success');
  const [title, setTitle] = useState<string>(titleSuccess);
  const navigate = useNavigate();
  const param = useParams<'value'>();
  const idUser = param.value as string;
  const [messageApi, contextHolder] = message.useMessage();

  const warning = (): void => {
    messageApi.open({
      type: 'warning',
      content: t('messageSaveWarning'),
    });
  };

  const [createReview, { isLoading, error }] = useCreateReviewMutation();

  useEffect(() => {
    if (!isLoading && !error && isSendRequest) {
      setIsSuccess(true);
      setStatus('success');
    }
    if (error) {
      setStatus('error');
      setIsSuccess(true);
      setTitle(t('errorCreated'));
    }
  }, [isLoading, error]);

  const onSetData = (
    dataReviewChange: Partial<Omit<DataReviewType, 'reviewText'>>,
  ): void => {
    const changeReviewData = { ...reviewData, ...dataReviewChange };
    setReviewData(changeReviewData);
    setIsSendRequest(true);
  };

  const onSaveReviewText = (text: string): void => {
    setReviewData({ ...reviewData, reviewText: text });
  };

  const onHomePage = (): void => {
    navigate(`${Path.Home}`);
  };

  const onCreateNewReview = (): void => {
    setIsSuccess(false);
    setIsSendRequest(false);
  };

  const onSendServer = (): void => {
    if (
      reviewData?.titleMain &&
      reviewData?.titleAbout &&
      reviewData?.category &&
      reviewData?.authorAssessment &&
      reviewData?.tags &&
      reviewData?.reviewText
    ) {
      createReview({ ...reviewData, idUser, url: urlRequest, idReview });
      setReviewData(EMPTY_REVIEW_DATA);
    } else {
      warning();
    }
  };

  return (
    <>
      {contextHolder}
      {isSuccess ? (
        <ResultElement
          status={status}
          title={title}
          firstCallback={onHomePage}
          secondCallback={onCreateNewReview}
          firstButtonText={t('homeButton')}
          secondButtonText={t('createReview')}
        />
      ) : (
        <>
          <HeaderReviewPage
            defaultTags={appSettingsTags}
            defaultCategory={appSettingsCategory}
            titleMain={reviewData.titleMain}
            titleAbout={reviewData.titleAbout}
            category={reviewData.category}
            tags={reviewData.tags}
            image={reviewData.image}
            authorAssessment={reviewData.authorAssessment}
            isStart
            isEdit
            setData={onSetData}
          />
          <TextAreaMarkDown
            isStart
            isEdit
            textButton={t('preview')}
            callback={onSaveReviewText}
            startText={reviewData.reviewText}
          />
          <div style={{ marginTop: '1rem' }}>
            <hr />
            <Button disabled={isLoading} type="primary" onClick={onSendServer}>
              {t('saveReview')}
            </Button>
          </div>
        </>
      )}
    </>
  );
};
