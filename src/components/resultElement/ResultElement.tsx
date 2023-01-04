import React, { ReactElement } from 'react';

import { Button, Result } from 'antd';

import { ResultElementType } from './types/ResultElementType';

export const ResultElement = ({
  firstCallback,
  secondCallback,
  secondButtonText,
  firstButtonText,
  title,
  status,
}: ResultElementType): ReactElement => (
  <Result
    status={status}
    title={title}
    extra={[
      <Button type="primary" key="firstButton" onClick={firstCallback}>
        {firstButtonText}
      </Button>,
      <Button key="secondButton" onClick={secondCallback}>
        {secondButtonText}
      </Button>,
    ]}
  />
);
