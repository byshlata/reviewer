import React, { ReactElement } from 'react';

import style from './AssessmentUser.module.sass';
import { AssessmentUserType } from './types/AssessmentUserType';

export const AssessmentUser = ({
  assessment,
  title,
}: AssessmentUserType): ReactElement => (
  <div className={style.wrapper}>
    <span className={style.title}>{title}</span>
    <span>{assessment}</span>
  </div>
);
