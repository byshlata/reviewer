export type RatingStarType = {
  disable: boolean;
  rating: number;
  changeRating?: (rating: number) => void;
};
