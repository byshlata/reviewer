import React, { ReactElement } from 'react';

import style from './Comment.module.sass';
import { CommentType } from './types/CommentType';

import { AvatarElement } from 'components/avatarElement/AvatarElement';

export const Comment = ({
  data,
  avatarAuthor,
  loginAuthor,
  text,
  ratingAuthor,
}: CommentType): ReactElement => (
  <li className={style.containerComment}>
    <AvatarElement avatar={avatarAuthor} login={loginAuthor} rating={ratingAuthor} />
    <div className={style.dataItem}>{data}</div>
    <article>{text}</article>
  </li>
);
