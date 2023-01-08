import React, { ReactElement, useCallback } from 'react';

import { Button } from 'antd';
import { RcFile } from 'antd/es/upload/interface';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { InformationBlock, UploadAvatar } from 'components';
import { TableUser } from 'components/tableUser/TableUser';
import { Path } from 'enums';
import { useParamsSkip } from 'hooks';
import style from 'pages/account/Account.module.sass';
import {
  selectorDataUserTable,
  selectorIsProgress,
  selectorUserAvatar,
  selectorUserShortInformation,
  useGetUserReviewsQuery,
} from 'store';
import { useChangeAvatarMutation } from 'store/api/authAPI';

export const Account = (): ReactElement => {
  const avatar = useSelector(selectorUserAvatar);
  const dataTable = useSelector(selectorDataUserTable);
  const userShortInformation = useSelector(selectorUserShortInformation);
  const isLoadingApp = useSelector(selectorIsProgress);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { skip, value } = useParamsSkip();
  const [updateAvatar] = useChangeAvatarMutation({});
  useGetUserReviewsQuery({ id: value }, { skip });

  const onNavigateCreateReviewPage = useCallback((): void => {
    navigate(`${Path.Account}${Path.CreateReview}${Path.Root}${value}`);
  }, [value]);

  const onChangeAvatar = useCallback((file: RcFile): void => {
    updateAvatar({ file });
  }, []);

  return (
    <div>
      <div className={style.informationWrapper}>
        <UploadAvatar
          avatar={avatar}
          isLoading={isLoadingApp}
          onGetImage={onChangeAvatar}
        />
        <InformationBlock data={userShortInformation} />
      </div>
      <Button type="primary" onClick={onNavigateCreateReviewPage}>
        {t('createReview')}
      </Button>
      <div>{dataTable.length ? <TableUser data={dataTable} /> : null}</div>
    </div>
  );
};
