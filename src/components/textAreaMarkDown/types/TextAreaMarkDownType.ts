import { UndefinedType } from 'types';

export type TextAreaMarkDownType = {
  isEdit: boolean;
  isStart: boolean;
  callback?: (value: string) => void;
  textButton?: string;
  startText?: UndefinedType<string>;
};
