// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar");

describe("caesarErrors", () => {
    it("should return false if shift = 0", () => {
        const input = "hello";
        const shift = 0;
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
    });
    it("should return false if shift < -25", () => {
        const input = "hello";
        const shift = -26;
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
    });
    it("should return false if shift > 25", () => {
        const input = "hello";
        const shift = 26;
        const actual = caesar(input, shift);
        expect(actual).to.be.false;
    });
    it("should return false if shift value isn't present", () => {
        const input = "hello";
        const actual = caesar(input);
        expect(actual).to.be.false;
    });
})

describe("caesarEncoding", () => {
  it("should encode a message by shifting the letters", () => {
    const input = "hello";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "khoor";
    expect(actual).to.eql(expected);
  });
  it("should leave spaces where they are", () => {
    const input = "a hello";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "d khoor";
    expect(actual).to.eql(expected);
  });
  it("should leave nonalphabetic symbols as they are", () => {
    const input = "hello!";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "khoor!";
    expect(actual).to.eql(expected);
  });
  it("should ignore capital letters", () => {
    const input = "Hello";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "khoor";
    expect(actual).to.eql(expected);
  });
  it("should appropriately encode letters at the end of the alphabet", () => {
    const input = "day";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "gdb";
    expect(actual).to.eql(expected);
  });
});

describe("caesarDecoding", () => {
    it("should decode a message by shifting the letters the opposite direction", () => {
        const input = "khoor";
        const shift = 3;
        const actual = caesar(input, shift, false);
        const expected = "hello";
        expect(actual).to.eql(expected);
      });
      it("should leave spaces where they are", () => {
        const input = "d khoor";
        const shift = 3;
        const actual = caesar(input, shift, false);
        const expected = "a hello";
        expect(actual).to.eql(expected);
      });
      it("should leave nonalphabetic symbols as they are", () => {
        const input = "khoor!";
        const shift = 3;
        const actual = caesar(input, shift, false);
        const expected = "hello!";
        expect(actual).to.eql(expected);
      });
      it("should ignore capital letters", () => {
        const input = "Khoor";
        const shift = 3;
        const actual = caesar(input, shift, false);
        const expected = "hello";
        expect(actual).to.eql(expected);
      });
      it("should appropriately encode letters at the end of the alphabet", () => {
        const input = "gdb";
        const shift = 3;
        const actual = caesar(input, shift, false);
        const expected = "day";
        expect(actual).to.eql(expected);
      });
});