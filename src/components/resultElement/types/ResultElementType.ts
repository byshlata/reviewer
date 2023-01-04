import { ResultStatusType } from 'antd/es/result';

export type ResultElementType = {
  status: ResultStatusType;
  title: string;
  firstCallback: () => void;
  secondCallback: () => void;
  firstButtonText: string;
  secondButtonText: string;
};
