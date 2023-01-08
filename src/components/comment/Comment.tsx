import React, { ReactElement } from 'react';

import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import style from './Comment.module.sass';
import { CommentType } from './types/CommentType';

import { AvatarElement } from 'components/avatarElement/AvatarElement';

export const Comment = ({ data, author, text }: CommentType): ReactElement => (
  <li className={style.containerComment}>
    {author && (
      <AvatarElement avatar={author.avatar} login={author.login} rating={author.rating} />
    )}
    <div className={style.dataItem}>{data}</div>
    <ReactMarkdown>{text}</ReactMarkdown>
  </li>
);
