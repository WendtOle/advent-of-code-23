import { expect } from "chai";
import { JumpMarks } from "../src/types";
import { getJumpMarks } from "../src/getJumpMarks";
import { loadImage } from "../src/loadImage";

describe("getJumpMarks", () => {
    it("returns jump marks for first example", () => {
        const jumpMarks: JumpMarks = {
            vertical: [3, 7],
            horizontal: [2, 5, 8]
        }
        const actual = getJumpMarks(loadImage("11/data/example-1"))
        expect(actual).to.deep.equal(jumpMarks)
    })
});