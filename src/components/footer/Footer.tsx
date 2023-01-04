import React, { ReactElement } from 'react';

import { useSelector } from 'react-redux';

import style from './Footer.module.sass';

import { selectorBgColor } from 'store';

export const Footer = (): ReactElement => {
  const backgroundColor = useSelector(selectorBgColor);
  return <div className={style.footer} style={{ backgroundColor }} />;
};
