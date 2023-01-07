import React, { ReactElement } from 'react';

import TextArea from 'antd/es/input/TextArea';

import { useButtonTextArea } from './hooks/useButtonTextArea';
import { TextAreaElementType } from './types/TextAreaElementType';

import { HelperPopover } from 'components';

export const TextAreaElement = ({
  text,
  onChangeText,
}: TextAreaElementType): ReactElement => {
  const { buttonHelp } = useButtonTextArea();
  return (
    <div style={{ margin: '1rem 0 1rem 0' }}>
      {buttonHelp.map(({ content, title, icon }) => (
        <HelperPopover key={title} title={title} content={content} icon={icon} />
      ))}
      <TextArea rows={7} onChange={onChangeText} value={text} />
    </div>
  );
};
