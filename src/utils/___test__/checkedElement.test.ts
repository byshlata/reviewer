import { checkedTags } from "utils";

describe('Unique element', () => {
  const one: any[] = [];
  const two = [ 1 ];
  const three = [ 1, 2, 2, 3, 3, 3, 4, 4, 4, 4 ];
  const four = [ 4, 2, 3, 2, 4, 3, 1, 3, 4, 4 ];

  test('Element should be unique', () => {
    expect(checkedTags(one)).toEqual([]);
    expect(checkedTags(two)).toEqual([ 1 ]);
    expect(checkedTags(three)).toEqual([ 1, 2, 3, 4 ]);
    expect(checkedTags(four)).toEqual([ 4, 2, 3, 1 ]);
  });
});
