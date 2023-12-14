import { expect } from "chai";
import { replaceSpelledOutNumbers } from "../src/replaceSpelledOutNumbers";

describe("replaceSpelledOutNumbers", () => {
    it("handles easy cases", () => {
        const actual = replaceSpelledOutNumbers("one");
        expect(actual).to.equal("1");
    })
    it("handles overlapping", () => {
        const actual = replaceSpelledOutNumbers("twone");
        expect(actual).to.equal("21");
    })
})