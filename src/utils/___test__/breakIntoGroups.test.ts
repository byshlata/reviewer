import { breakIntoGroups } from "utils";

describe('Count element array', () => {
  const one: any[] = [];
  const two = [1];
  const three = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
  const four = [4, 2, 3, 2, 4, 3, 1, 3, 4, 4];

  test('Element should be your array', () => {
    expect(breakIntoGroups(one)).toEqual([]);
    expect(breakIntoGroups(two)).toEqual([[1]]);
    expect(breakIntoGroups(three)).toEqual([[1], [2, 2], [3, 3, 3], [4, 4, 4, 4]]);
    expect(breakIntoGroups(four)).toEqual([[1], [2, 2], [3, 3, 3], [4, 4, 4, 4]]);
  });
});
