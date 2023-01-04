import { ReactNode } from 'react';

export type ButtonLogoType = {
  title: string;
  children: ReactNode;
  onClick: () => void;
};
