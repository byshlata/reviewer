export const createKeys = <T>(obj: T): string[] | [] =>
  obj instanceof Object ? Object.keys(obj) : [];
