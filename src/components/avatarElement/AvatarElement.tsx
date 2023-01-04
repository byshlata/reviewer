import React, { ReactElement } from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Avatar, Typography } from 'antd';

import style from './AvatarElement.module.sass';
import { AvatarElementType } from './types/AvatarElementType';

import { RatingUser } from 'components/ratingUser/RatingUser';

const { Title } = Typography;

export const AvatarElement = ({
  avatar,
  login,
  rating,
}: AvatarElementType): ReactElement => (
  <div className={style.wrapper}>
    <Avatar size="small" icon={<UserOutlined />} src={avatar} shape="square" />
    <div className={style.titleWrapper}>
      <Title style={{ marginBottom: 0 }} className={style.title} level={5}>
        {login}
      </Title>
      <RatingUser rating={rating} />
    </div>
  </div>
);
