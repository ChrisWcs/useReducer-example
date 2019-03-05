import reducer from './reducer';
import { ADD_PLAIN, UPDATE_INPUT } from './actions';

describe("Reducer tests", () => {
    it("adds new plaintext", () => {
        const actual = reducer({
            tempValue: "Plain text to be ciphered",
            texts: [],
        }, {
            type: ADD_PLAIN
        });
        const expected = {
            tempValue: "",
            texts: ["Plain text to be ciphered"]
        }

        expect(actual).toEqual(expected);
    })

    it("updates current value in input", () => {
        const actual = reducer({
            tempValue: "",
            texts: [],
        }, {
            type: UPDATE_INPUT,
            payload: "Plain text to be ciphered"
        });
        const expected = {
            tempValue: "Plain text to be ciphered",
            texts: []
        }

        expect(actual).toEqual(expected);
    })
})