import React, { ReactElement } from 'react';

import { ArrowRightOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import { IdButtonType } from './types/IdButtonType';

export const IdButton = ({ id, callback, textButton }: IdButtonType): ReactElement => (
  <Button icon={<ArrowRightOutlined />} type="primary" onClick={() => callback(id)}>
    {textButton}
  </Button>
);
