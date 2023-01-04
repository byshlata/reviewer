import React, { ReactElement } from 'react';

import { useTranslation } from 'react-i18next';

import style from './ImformationBlock.module.sass';
import { InformationBlocType } from './types/InformationBlocType';

export const InformationBlock = ({ data }: InformationBlocType): ReactElement => {
  const { t } = useTranslation();
  return (
    <div className={style.wrapper}>
      {data.map(info => (
        <div key={info[0]} className={style.itemWrapper}>
          <span className={style.title}>{t(info[0])}:</span>
          <span className={style.option}>{info[1]}</span>
        </div>
      ))}
    </div>
  );
};
