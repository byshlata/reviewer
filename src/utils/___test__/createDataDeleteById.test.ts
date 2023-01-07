import { createDataDeleteById } from "utils";

describe('Element array to string', () => {
    const one: any[] = [];
    const two = [1];
    const three = [1, 2, 3];

    test('Element should be string', () => {
        expect(createDataDeleteById(one)).toEqual({ "idSome": [] });
        expect(createDataDeleteById(two)).toEqual({ "idSome": ['1'] });
        expect(createDataDeleteById(three)).toEqual({ "idSome": ['1', '2', '3'] } );
    });
});
