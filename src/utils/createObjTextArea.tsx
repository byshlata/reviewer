import {
  BoldOutlined,
  LineHeightOutlined,
  ItalicOutlined,
  UnderlineOutlined,
  FileImageOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

import { HelperPopoverType } from 'components/helperPopover/types/HelperPopoverType';

export const createObjTextArea = (): HelperPopoverType[] => {
  const { t } = useTranslation();

  return [
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
};
