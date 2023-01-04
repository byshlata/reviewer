import React, { ReactElement } from 'react';

import { Button } from 'antd';

import style from './ButtonLogo.module.sass';
import { ButtonLogoType } from './types/ButtonLogoType';

export const ButtonLogo = ({
  onClick,
  title,
  children,
}: ButtonLogoType): ReactElement => (
  <Button type="text" onClick={onClick} className={style.wrapper}>
    {children}
    <h2 className={style.title}>{title}</h2>
  </Button>
);
