// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution");

describe("substitutionErrors", () => {
    it("should return false if substitution alphabet length is not 26", () => {
        const input = "hello";
        const alphabet = "notlongenough";
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });
    it("should return false if no substitution alphabet entered", () => {
        const input = "hello";
        const actual = substitution(input);
        expect(actual).to.be.false;
    });
    it("should return false if substitution alphabet does not have unique characters", () => {
        const input = "hello";
        const alphabet = "nkzxourt@hvnk!lsihanviorsw";
        const actual = substitution(input, alphabet);
        expect(actual).to.be.false;
    });
});

describe("substutitionEncoding", () => {
    it("should encode a message using the given alphabet", () => {
        const input = "hello";
        const alphabet = "qmwenbrvtczpxoialskdjfhguy";
        const actual = substitution(input, alphabet);
        const expected = "vnppi";
        expect(actual).to.eql(expected);
    });
    it("should encode using special characters", () => {
        const input = "hello";
        const alphabet = "qmwenbr!tczpxo#alskdjfhguy";
        const actual = substitution(input, alphabet);
        const expected = "!npp#";
        expect(actual).to.eql(expected);
    });
    it("should maintain spaces", () => {
        const input = "a hello";
        const alphabet = "qmwenbrvtczpxoialskdjfhguy";
        const actual = substitution(input, alphabet);
        const expected = "q vnppi";
        expect(actual).to.eql(expected);
    });
    it("should ignore capital letters", () => {
        const input = "Hello";
        const alphabet = "qmwenbrvtczpxoialskdjfhguy";
        const actual = substitution(input, alphabet);
        const expected = "vnppi";
        expect(actual).to.eql(expected);
    });
});

describe("substitutionDecoding", () => {
    it("should decode a message using the given alphabet", () => {
        const input = "vnppi";
        const alphabet = "qmwenbrvtczpxoialskdjfhguy";
        const actual = substitution(input, alphabet, false);
        const expected = "hello";
        expect(actual).to.eql(expected);
    });
    it("should decode using special characters", () => {
        const input = "!npp#";
        const alphabet = "qmwenbr!tczpxo#alskdjfhguy";
        const actual = substitution(input, alphabet, false);
        const expected = "hello";
        expect(actual).to.eql(expected);
    });
    it("should maintain spaces", () => {
        const input = "q vnppi";
        const alphabet = "qmwenbrvtczpxoialskdjfhguy";
        const actual = substitution(input, alphabet, false);
        const expected = "a hello";
        expect(actual).to.eql(expected);
    });
    it("should ignore capital letters", () => {
        const input = "Vnppi";
        const alphabet = "qmwenbrvtczpxoialskdjfhguy";
        const actual = substitution(input, alphabet, false);
        const expected = "hello";
        expect(actual).to.eql(expected);
    });
});