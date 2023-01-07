import React, { ReactElement } from 'react';

import { Menu } from 'antd';

import { useItemMenu } from './hooks/useItemMenu';
import style from './MenuApp.module.sass';
import { MenuType } from './types/MenuType';

export const MenuApp = ({ user }: MenuType): ReactElement => {
  const { items, currentItem, onClick } = useItemMenu(user);

  return (
    <Menu
      className={style.menuContainer}
      mode="horizontal"
      selectedKeys={[currentItem]}
      onClick={onClick}
      items={items}
    />
  );
};
