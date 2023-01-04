const OPACITY_EDIT = 0.1;
const OPACITY_NOT_EDIT = 1;
const Z_INDEX_EDIT = 0;
const Z_INDEX_NOT_EDIT = 100;
const POSITION_EDIT = 'static' as unknown as any;
const POSITION_NOT_EDIT = 'absolute' as unknown as any;

type StyleHeaderReviewPageType = {
  opacity: number;
  zIndex: number;
  position: any;
};

export const useHeaderReviewPage = (isEdit: boolean): StyleHeaderReviewPageType => {
  const opacity = isEdit ? OPACITY_EDIT : OPACITY_NOT_EDIT;
  const zIndex = isEdit ? Z_INDEX_EDIT : Z_INDEX_NOT_EDIT;
  const position = isEdit ? POSITION_EDIT : POSITION_NOT_EDIT;
  return { opacity, zIndex, position };
};
