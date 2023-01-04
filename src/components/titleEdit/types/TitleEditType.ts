import { ReactNode } from 'react';

export type TitleEditType = {
  sizeTitle: number;
  placeholderInput: string;
  textButton: string;
  textLabel: string;
  title: string;
  isEdit: boolean;
  callback: (text: string) => void;
  children?: ReactNode;
  isStart: boolean;
};
