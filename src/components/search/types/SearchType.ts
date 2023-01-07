import { ReactNode } from 'react';

import { UndefinedType } from 'types';

export type SearchType = {
  value: string;
  placeholder: string;
  resultSearch: UndefinedType<{ value: string; label: string | ReactNode }[]>;
  onSearch: (value: string) => void;
  onSelect: (value: string) => void;
};
