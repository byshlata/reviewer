import React, { ReactElement, useCallback } from 'react';

import { Button } from 'antd';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { InformationBlock } from 'components';
import { TableUser } from 'components/tableUser/TableUser';
import { Path } from 'enums';
import { useParamsSkip } from 'hooks';
import style from 'pages/account/Account.module.sass';
import { selectorUserAvatar, useGetDataStrangerUserQuery } from 'store';
import { createInformationAbout } from 'utils';

export const AccountStranger = (): ReactElement => {
  const avatar = useSelector(selectorUserAvatar);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { skip, value } = useParamsSkip();
  const { data } = useGetDataStrangerUserQuery({ id: value }, { skip });

  const onNavigateCreateReviewPage = useCallback((): void => {
    navigate(`${Path.Account}${Path.CreateReview}${Path.Root}${value}`);
  }, [value]);

  const dataUser = createInformationAbout({
    login: data?.userOther.login,
    email: data?.userOther.email,
    status: data?.userOther.status,
    rights: data?.userOther.rights,
    rating: data?.userOther.rating,
  });

  return (
    <div>
      <div className={style.informationWrapper}>
        <img src={avatar || ''} alt="avatar" className={style.image} />
        <InformationBlock data={dataUser} />
      </div>
      <Button type="primary" onClick={onNavigateCreateReviewPage}>
        {t('createReview')}
      </Button>
      <div>{data?.reviews.length ? <TableUser data={data?.reviews} /> : null}</div>
    </div>
  );
};
