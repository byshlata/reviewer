import React, { ReactElement } from 'react';

import { ClockCircleOutlined } from '@ant-design/icons';

import style from './DataTime.module.sass';
import { DataTimeType } from './types/DataTimeType';

export const DataTime = ({ data, placeholder }: DataTimeType): ReactElement => (
  <div className={style.wrapper}>
    <ClockCircleOutlined />
    <span className={style.item}>{placeholder}:</span>
    <span className={style.item}>{data}</span>
  </div>
);
