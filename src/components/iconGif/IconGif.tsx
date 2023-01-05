import React, { ReactElement } from 'react';

import { GithubOutlined, GoogleOutlined } from '@ant-design/icons';

import style from './IconGif.module.sass';

export const IconGif = (): ReactElement => (
  <div className={style.wrapperColumn}>
    <img
      className={style.item}
      src="https://i.gifer.com/embedded/download/S7ub.gif"
      alt="eye"
    />
    <div className={style.wrapper}>
      <GithubOutlined />
      <GoogleOutlined />
    </div>
  </div>
);
