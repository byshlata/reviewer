import { ReactElement, useEffect, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import style from './SearchContainer.module.sass';

import { Search } from 'components';
import { Path } from 'enums';
import { useDebounce } from 'hooks';
import { useSearchByReviewMutation } from 'store';

export const SearchContainer = (): ReactElement => {
  const [searchText, setSearchText] = useState<string>('');
  const debouncedValue = useDebounce<string>(searchText);
  const navigate = useNavigate();
  const [createReview, result] = useSearchByReviewMutation();
  const { t } = useTranslation();
  useEffect(() => {
    if (searchText) {
      createReview({ searchText });
    }
  }, [debouncedValue]);

  const onSelect = (value: any): void => {
    navigate(`${Path.Review}${Path.Root}${value}`);
  };

  const onSearch = (value: string): void => {
    setSearchText(value);
  };

  return (
    <div className={style.wrapper}>
      <Search
        value={searchText}
        onSearch={onSearch}
        resultSearch={result.data?.searchResult}
        onSelect={onSelect}
        placeholder={t('searchReview')}
      />
    </div>
  );
};
