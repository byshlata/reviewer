import React, { ReactElement, useEffect, useState } from 'react';

import { HomeOutlined, KeyOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import style from './MenuApp.module.sass';
import { MenuType } from './types/MenuType';

import { Path, Rights } from 'enums';
import { selectorIsAuth } from 'store';
import { RightsType } from 'types';
import { knowPathManeMenu } from 'utils';

export const MenuApp = ({ user }: MenuType): ReactElement => {
  const userId = useSelector(selectorIsAuth);
  const { t } = useTranslation();
  const location = useLocation();
  const startMenuItem = knowPathManeMenu(location.pathname);
  const [current, setCurrent] = useState(startMenuItem);
  const navigate = useNavigate();

  useEffect(() => {
    setCurrent(startMenuItem);
  }, [startMenuItem]);

  const itemAll: MenuProps['items'] = [
    {
      label: t('home'),
      key: Path.Home,
      icon: <HomeOutlined />,
    },
    {
      label: t('account'),
      key: Path.Account,
      icon: <UserOutlined />,
    },
    {
      label: t('accountAdmin'),
      key: Path.AccountAdmin,
      icon: <KeyOutlined />,
    },
  ];

  const createMenu = (
    items: MenuProps['items'] = [],
    rights: RightsType = Rights.User,
  ): MenuProps['items'] | undefined => {
    if (rights === Rights.User && items) {
      return items.splice(0, items.length - 1);
    }
    return items;
  };

  const items = createMenu(itemAll, user);

  const onClick: MenuProps['onClick'] = (event: any): void => {
    if (event.key === Path.Account) {
      navigate(`${event.key}${Path.Root}${userId}`);
    }
    if (event.key === Path.AccountAdmin) {
      navigate(`${event.key}${Path.Root}${userId}`);
    }
    if (event.key === Path.Home) {
      navigate(`${event.key}`);
    }
  };

  return (
    <Menu
      className={style.menuContainer}
      mode="horizontal"
      selectedKeys={[current]}
      onClick={onClick}
      items={items}
    />
  );
};
