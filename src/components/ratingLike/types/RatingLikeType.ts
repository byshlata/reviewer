export type RatingLikeType = {
  isLake: boolean;
  rating: number;
  changeRating?: () => void;
  disable: boolean;
};
