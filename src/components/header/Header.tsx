import React, { ReactElement } from 'react';

import { useSelector } from 'react-redux';

import mainStyle from '../../styles/container.module.sass';

import style from './Header.module.sass';
import { HeaderType } from './types/HeaderType';

import { selectorBgColor } from 'store/selector/selectorApp';

export const Header = ({ children }: HeaderType): ReactElement => {
  const backgroundColor = useSelector(selectorBgColor);
  return (
    <div style={{ background: `${backgroundColor}` }} className={style.header}>
      <div className={mainStyle.container}>
        <div className={style.container}>{children.map(element => element)}</div>
      </div>
    </div>
  );
};
