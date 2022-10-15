// Write your tests here!
const expect = require("chai").expect;
const {polybius} = require("../src/polybius");

describe("polybiusEncoding", () => {
    it("should encode a message by translating letters into number pairs", () => {
        const input = "hello";
        const actual = polybius(input);
        const expected = "3251131343";
        expect(actual).to.eql(expected);
    });
    it("should encode both i and j to 42", () => {
        const input = "injury";
        const actual = polybius(input);
        const expected = "423342542445";
        expect(actual).to.eql(expected);
    });
    it("should maintain spaces", () => {
        const input = "a good day";
        const actual = polybius(input);
        const expected = "11 22434341 411145";
        expect(actual).to.eql(expected);
    });
    it("should ignore capital letters", () => {
        const input = "Hello";
        const actual = polybius(input);
        const expected = "3251131343";
        expect(actual).to.eql(expected);
    });
});

describe("polybiusDecoding", () => {
    it("should decode a message by translating number pairs into letters", () => {
        const input = "3251131343";
        const actual = polybius(input, false);
        const expected = "hello";
        expect(actual).to.eql(expected);
    });
    it("should return false if number of characters is odd", () => {
        const input = "11 23251131343";
        const actual = polybius(input, false);
        expect(actual).to.be.false;
    });
    it("should maintain spaces throughout", () => {
        const input = "11 22434341 411145";
        const actual = polybius(input, false);
        const expected = "a good day";
        expect(actual).to.eql(expected);
    });
    it("should show both 'i' and 'j' when 42 is decoded", () => {
        const input = "423342542445";
        const actual = polybius(input, false);
        const expected = "i/jni/jury"
        expect(actual).to.eql(expected);
    });
});

