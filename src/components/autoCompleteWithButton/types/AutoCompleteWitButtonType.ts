export type AutoCompleteWitButtonType = {
  textButton: string;
  callback: (value: string) => void;
  options: string[];
  placeholder?: string;
  disabled?: boolean;
};
