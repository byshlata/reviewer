import { createValueTagsCloud } from "utils";

describe('Array object tag cloud', () => {
    const one = [[]];
    const two = [['1'], ['2', '2'], ['3', '3', '3']];

    test('Array cloud should be change', () => {
        expect(createValueTagsCloud(one)).toEqual([{ value: undefined, count: 0 }]);
        expect(createValueTagsCloud(two)).toEqual([{ value: '1', count: 1 }, {
            value: '2',
            count: 2
        }, { value: '3', count: 3 }]);
    });
});
