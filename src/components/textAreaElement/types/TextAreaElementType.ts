import { ChangeEvent } from 'react';

export type TextAreaElementType = {
  onChangeText: (value: ChangeEvent<HTMLTextAreaElement>) => void;
  text: string;
};
