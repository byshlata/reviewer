import React, { useEffect, useState } from 'react';

import { HomeOutlined, KeyOutlined, UserOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { Path, Rights } from 'enums';
import { selectorIsAuth } from 'store';
import { RightsType, UndefinedType } from 'types';
import { knowPathManeMenu } from 'utils';

export const useItemMenu = (
  user: UndefinedType<RightsType>,
): {
  items: ItemType[] | undefined;
  currentItem: string;
  onClick: MenuProps['onClick'];
} => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const userId = useSelector(selectorIsAuth);
  const location = useLocation();
  const startMenuItem = knowPathManeMenu(location.pathname);
  const [currentItem, setCurrentItem] = useState(startMenuItem);

  useEffect(() => {
    setCurrentItem(startMenuItem);
  }, [startMenuItem]);

  const createMenu = (
    items: MenuProps['items'] = [],
    rights: RightsType = Rights.User,
  ): MenuProps['items'] | undefined => {
    if (rights === Rights.User && items) {
      return items.splice(0, items.length - 1);
    }
    return items;
  };

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

  const items = createMenu(itemAll, user);
  return { items, currentItem, onClick };
};
