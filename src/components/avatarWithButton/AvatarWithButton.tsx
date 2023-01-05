import React, { ReactElement } from 'react';

import { LoginOutlined, UserOutlined } from '@ant-design/icons';
import { LogoutOutlined } from '@ant-design/icons/lib/icons';
import { Avatar, Button } from 'antd';

import style from './AvatarWithButton.module.sass';
import { AvatarWithButtonType } from './types/avatarWithButtonType';

import { RatingUser } from 'components';

export const AvatarWithButton = ({
  avatar,
  onLogout,
  onLogin,
  rating,
  isAuth,
}: AvatarWithButtonType): ReactElement => (
  <div className={style.wrapper}>
    {isAuth ? (
      <>
        <Avatar
          className={style.item}
          size="small"
          icon={<UserOutlined />}
          src={avatar}
          shape="square"
        />
        <RatingUser rating={rating} />
        <Button type="primary" onClick={onLogout} icon={<LogoutOutlined />} />
      </>
    ) : (
      <Button onClick={onLogin} type="primary" icon={<LoginOutlined />} />
    )}
  </div>
);
