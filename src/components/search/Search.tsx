import { ReactElement } from 'react';

import { AutoComplete, Input } from 'antd';

import { SearchType } from './types/SearchType';

export const Search = ({
  resultSearch,
  placeholder,
  onSearch,
  onSelect,
  value,
}: SearchType): ReactElement => (
  <AutoComplete
    dropdownMatchSelectWidth={252}
    options={resultSearch}
    value={value}
    onSelect={onSelect}
    onSearch={onSearch}
  >
    <Input.Search size="large" placeholder={placeholder} enterButton />
  </AutoComplete>
);
