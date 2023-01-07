export const createKeys = <T>(obj: T): string[] | [] =>
  typeof obj === 'object' && obj !== null && !Array.isArray(obj) ? Object.keys(obj) : [];
