import { ReactNode } from 'react';

export type TagType = {
  value: string;
  label: string;
};

export type CreatorContainerType = {
  isEdit: boolean;
  isStart: boolean;
  textButton: string;
  textLabel: string;
  children: ReactNode;
  element?: ReactNode;
  onSaveCallback: () => void;
};

export type CreatorType = {
  category?: string;
  checkTags?: string[];
  defaultValue: string[];
  callback: (value: string[] | string) => void;
  isEdit: boolean;
  isStart: boolean;
  textButton: string;
  textLabel: string;
  labelElement: string;
};
