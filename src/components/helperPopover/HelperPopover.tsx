import React, { ReactElement } from 'react';

import { Button, Popover } from 'antd';

import { HelperPopoverType } from './types/HelperPopoverType';

export const HelperPopover = ({
  icon,
  content,
  title,
  textButton,
}: HelperPopoverType): ReactElement => (
  <Popover
    placement="topLeft"
    title={<span>{title}</span>}
    content={<p>{content}</p>}
    trigger="click"
  >
    <Button type="text" icon={icon}>
      {textButton}
    </Button>
  </Popover>
);

export default HelperPopover;
