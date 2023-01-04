export const isCategory = (category: string, categories: string[]): boolean =>
  categories.indexOf(category) !== -1 || category === '';
