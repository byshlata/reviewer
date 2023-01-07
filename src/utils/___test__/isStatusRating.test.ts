import { isStatusRating } from "utils";

describe('Element by array', () => {
    const oneCategory = undefined;
    const oneUsers: string[] = [];
    const twoUser = '1';
    const twoUsers: string[] = ['0', '1', '2'];
    const threeUser = '3';
    const threeUsers: string[] = ['0', '1', '2'];

    test('Element should be checked', () => {
        expect(isStatusRating({ idUsers: oneUsers, idUser: oneCategory })).toBeFalsy();
        expect(isStatusRating({idUsers: twoUsers, idUser: twoUser})).toBeTruthy()
        expect(isStatusRating({idUsers: threeUsers, idUser: threeUser})).toBeFalsy()
    });
});
