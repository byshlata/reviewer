import React, { ChangeEvent, ReactElement, useState } from 'react';

import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

import style from './TextAreaMarkDown.module.sass';
import { TextAreaMarkDownType } from './types/TextAreaMarkDownType';

import { TextAreaElement } from 'components';

export const TextAreaMarkDown = ({
  isEdit,
  isStart,
  callback,
  textButton,
  startText,
}: TextAreaMarkDownType): ReactElement => {
  const [isOpen, setIsOpen] = useState<boolean>(isStart);
  const [text, setText] = useState<string>(startText || '');

  const onChangeText = (value: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(value.currentTarget.value);
  };

  const onEdit = (): void => {
    setIsOpen(!isOpen);
    if (text && callback) {
      callback(text);
    }
  };

  return (
    <div className={style.textAreaWrapper}>
      {isOpen ? <TextAreaElement text={text} onChangeText={onChangeText} /> : null}
      {isEdit && (
        <div style={{ marginTop: '1rem' }}>
          {!isOpen ? (
            <Button type="text" icon={<EditOutlined />} onClick={onEdit} />
          ) : (
            <Button type="primary" onClick={onEdit}>
              {textButton}
            </Button>
          )}
        </div>
      )}

      <div className={style.textArea}>
        <ReactMarkdown>{text}</ReactMarkdown>
      </div>
    </div>
  );
};
