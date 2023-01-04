import React, { ReactElement } from 'react';

import style from './DarkThemeBackground.module.sass';

export const DarkThemeBackground = (): ReactElement => (
  <div className={style.optionBg}>
    <div className={style.firefly} />
    <div className={style.firefly} />
    <div className={style.firefly} />
    <div className={style.firefly} />
    <div className={style.firefly} />
    <div className={style.firefly} />
  </div>
);
