import { knowPathManeMenu } from "utils";

describe('Element by array', () => {
    const onePathUrl = '';
    const twoPathUrl = '/one/two';
    const threePathUrl = '/one/two/tree';

    test('Element should be checked', () => {
        expect(knowPathManeMenu(onePathUrl)).toBe('/undefined');
        expect(knowPathManeMenu(twoPathUrl)).toBe('/one')
        expect(knowPathManeMenu(threePathUrl)).toBe('/one')
    });
});
