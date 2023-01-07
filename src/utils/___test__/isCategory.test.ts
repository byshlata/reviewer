import { isCategory } from "utils";

describe('Element by array', () => {
    const oneCategory = '';
    const oneCategories: any[] = [];
    const twoCategory = 1;
    const twoCategories: any[] = [0, 1, 2];
    const threeCategory = 3;
    const threeCategories: any[] = [0, 1, 2];

    test('Element should be checked', () => {
        expect(isCategory(oneCategory, oneCategories)).toBeTruthy();
        expect(isCategory(twoCategory, twoCategories)).toBeTruthy()
        expect(isCategory(threeCategory, threeCategories)).toBeFalsy()
    });
});
