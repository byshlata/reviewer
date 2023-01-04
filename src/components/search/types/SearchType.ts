import { ReactNode } from 'react';

import { UndefindType } from 'types';

export type SearchType = {
  value: string;
  placeholder: string;
  resultSearch: UndefindType<{ value: string; label: string | ReactNode }[]>;
  onSearch: (value: string) => void;
  onSelect: (value: string) => void;
};
