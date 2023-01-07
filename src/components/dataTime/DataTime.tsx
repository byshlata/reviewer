import React, { ReactElement } from 'react';

import { ClockCircleOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import style from './DataTime.module.sass';
import { DataTimeType } from './types/DataTimeType';

export const DataTime = ({ data }: DataTimeType): ReactElement => {
  const { t } = useTranslation();

  return (
    <div className={style.wrapper}>
      <ClockCircleOutlined />
      <span className={style.item}>{t('dataCreate')}:</span>
      <span className={style.item}>{data}</span>
    </div>
  );
};
