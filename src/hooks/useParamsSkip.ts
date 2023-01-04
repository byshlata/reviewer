import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

export const useParamsSkip = (): { value: string; skip: boolean } => {
  const [skip, setSkip] = useState<boolean>(true);
  const param = useParams<'value'>();
  const value = param.value as string;
  useEffect(() => {
    if (value) {
      setSkip(false);
    }
  }, [value]);

  return { value, skip };
};
