import { createKeys } from "utils";

describe('Object key', () => {
    const one = {};
    const two = { 1: '', 2: '', 3: '' };
    const three = 1;
    const four = [1, 2, 3];

    test('Key should be extracted from object', () => {
        expect(createKeys(one)).toEqual([]);
        expect(createKeys(two)).toEqual(['1', '2', '3']);
        expect(createKeys(three)).toEqual([]);
        expect(createKeys(four)).toEqual([]);
        expect(createKeys(null)).toEqual([]);
        expect(createKeys(undefined)).toEqual([]);
    });
});
