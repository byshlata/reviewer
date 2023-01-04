import { ReactNode } from 'react';

export type TitleNumberEditType = {
  sizeTitle: number;
  placeholderInput: string;
  textButton: string;
  textLabel: string;
  assessment: number;
  isEdit: boolean;
  callback: (number: number) => void;
  children?: ReactNode;
  isStart: boolean;
};
