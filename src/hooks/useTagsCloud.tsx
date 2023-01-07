import { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import { selectorTagsForCloud } from 'store';
import { TagsCloudType } from 'types';
import { breakIntoGroups, createValueTagsCloud } from 'utils';

export const useTagsCloud = (): { tagsOut: TagsCloudType[] } => {
  const tags = useSelector(selectorTagsForCloud);
  const [tagsCloud, setTagsCloud] = useState<string[]>(tags);
  const [tagsCloudOut, setTagsCloudOut] = useState<TagsCloudType[]>([]);

  useEffect(() => {
    if (tags.length !== tagsCloud.length) {
      setTagsCloud(tags);
      setTagsCloudOut(createValueTagsCloud(breakIntoGroups(tags)));
    }
  }, [tags.length]);

  useEffect(() => {
    setTagsCloud(tags);
    setTagsCloudOut(createValueTagsCloud(breakIntoGroups(tags)));
  }, []);

  return { tagsOut: tagsCloudOut };
};
