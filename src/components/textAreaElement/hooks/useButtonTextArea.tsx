import React from 'react';

import {
  BoldOutlined,
  FileImageOutlined,
  ItalicOutlined,
  LineHeightOutlined,
  UnderlineOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import { ButtonHelperType } from '../types/ButtonHelperType';

export const useButtonTextArea = (): { buttonHelp: ButtonHelperType[] } => {
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
  return { buttonHelp };
};
