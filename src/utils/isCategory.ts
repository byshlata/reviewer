export const isCategory = (category: any, categories: any[]): boolean =>
  categories.indexOf(category) !== -1 || category === '';
