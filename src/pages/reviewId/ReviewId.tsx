import React, { ChangeEvent, ReactElement, useRef, useState } from 'react';

import { PrinterOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useReactToPrint } from 'react-to-print';

import style from './ReviewId.module.sass';

import { Comment, TextAreaElement } from 'components';
import { useParamsSkip } from 'hooks';
import { Review } from 'pages';
import { selectorIsAuth, useCreateCommentMutation, useGetReviewQuery } from 'store';

export const ReviewId = (): ReactElement => {
  const isAuth = useSelector(selectorIsAuth);
  const [textComment, setTextComment] = useState<string>('');
  const { t } = useTranslation();
  const { skip, value } = useParamsSkip();
  const componentRef = useRef(null);

  const { data } = useGetReviewQuery(
    {
      id: value,
    },
    { skip, pollingInterval: 2000 },
  );

  const [createComment, { isLoading }] = useCreateCommentMutation();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const onChangeComment = (text: ChangeEvent<HTMLTextAreaElement>): void => {
    setTextComment(text.currentTarget.value);
  };

  const onSendComment = (): void => {
    if (textComment) {
      createComment({ text: textComment, idReview: value });
    }
  };
  return (
    <div>
      <div ref={componentRef}>
        <Review data={data} isEdit={false} isStart={false} />
      </div>
      <div className={style.printButtonWrapper}>
        <Button type="primary" onClick={handlePrint} icon={<PrinterOutlined />} />
      </div>

      {isAuth && (
        <div className={style.textAreaWrapper}>
          <div className={style.title}>{t('leaveComment')}:</div>
          <TextAreaElement text={textComment} onChangeText={onChangeComment} />
          <Button type="primary" onClick={onSendComment} disabled={isLoading}>
            {t('sendComment')}
          </Button>
        </div>
      )}

      <ol style={{ padding: 0 }}>
        {data?.review.comments.map(({ text, author, _id, createdAt }) => (
          <Comment
            key={_id}
            text={text}
            avatarAuthor={author.avatar}
            loginAuthor={author.login}
            data={createdAt}
            ratingAuthor={author.rating}
          />
        ))}
      </ol>
    </div>
  );
};
