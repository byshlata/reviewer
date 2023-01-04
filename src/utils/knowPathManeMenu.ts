import { Path } from 'enums';

export const knowPathManeMenu = (pathUrl: string): string =>
  `${Path.Root}${pathUrl.split(Path.Root).find(path => path.length !== 0)}`;
