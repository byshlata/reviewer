import React, { ReactElement } from 'react';

import {
  BoldOutlined,
  FileImageOutlined,
  ItalicOutlined,
  LineHeightOutlined,
  UnderlineOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import TextArea from 'antd/es/input/TextArea';
import { useTranslation } from 'react-i18next';

import HelperPopover from 'components/helperPopover/HelperPopover';
import { TextAreaElementType } from 'components/textAreaElement/types/TextAreaElementType';

export const TextAreaElement = ({
  text,
  onChangeText,
}: TextAreaElementType): ReactElement => {
  const { t } = useTranslation();
  const buttonHelp = [
    {
      title: t('helpTextTitle'),
      content: t('helpTextTitleContent'),
      icon: <LineHeightOutlined />,
    },
    {
      title: t('helpTextBold'),
      content: t('helpTextBoldContent'),
      icon: <BoldOutlined />,
    },
    {
      title: t('helpTextItalic'),
      content: t('helpTextItalicContent'),
      icon: <ItalicOutlined />,
    },
    {
      title: t('helpTextLink'),
      content: t('helpTextLincContent'),
      icon: <UnderlineOutlined />,
    },
    {
      title: t('helpTextImage'),
      content: t('helpTextImageContent'),
      icon: <FileImageOutlined />,
    },
    {
      title: t('helpTextList'),
      content: t('helpTextListContent'),
      icon: <UnorderedListOutlined />,
    },
  ];
  return (
    <div style={{ margin: '1rem 0 1rem 0' }}>
      {buttonHelp.map(({ content, title, icon }) => (
        <HelperPopover key={title} title={title} content={content} icon={icon} />
      ))}
      <TextArea rows={7} onChange={onChangeText} value={text} />
    </div>
  );
};
