import { createInformationAbout } from "utils";

describe('Change object', () => {
    const one = {};
    const two = {1: '1', 2: '2'};

    test('Object should be changed', () => {
        expect(createInformationAbout(one)).toEqual([]);
        expect(createInformationAbout(two)).toEqual([['1', '1'], ['2', '2']]);
    });
});
