import { useCallback, useState } from 'react';

import { useEventListener, useIsomorphicLayoutEffect } from 'usehooks-ts';

type SizeType = {
  width: number;
  height: number;
};

const OFFSET_HEIGHT_ELEMENT = 20;
const OFFSET_WIGHT_ELEMENT = 0;

export const useElementSize = <T extends HTMLElement = HTMLDivElement>(
  widthOffset = OFFSET_WIGHT_ELEMENT,
  heightOffset = OFFSET_HEIGHT_ELEMENT,
): [(node: T | null) => void, SizeType] => {
  const [ref, setRef] = useState<T | null>(null);
  const [size, setSize] = useState<SizeType>({
    width: 0,
    height: 0,
  });
  const handleSize = useCallback(() => {
    if (ref?.offsetHeight) {
      setSize({
        // eslint-disable-next-line no-unsafe-optional-chaining
        width: ref?.offsetWidth + widthOffset || 0,
        // eslint-disable-next-line no-unsafe-optional-chaining
        height: ref?.offsetHeight + heightOffset || 0,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth]);

  useEventListener('resize', handleSize);

  useIsomorphicLayoutEffect(() => {
    handleSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref?.offsetHeight, ref?.offsetWidth]);
  return [setRef, size];
};
