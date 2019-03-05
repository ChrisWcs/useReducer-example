import { shift } from './cipherUtils';


describe("shift function", () => {
    it("shift message 1", () => {
        const initial = "hello";
        const expected = "ifmmp";
        const actual = shift(initial);

        expect(actual).toBe(expected);
    })
});