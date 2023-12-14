import { expect } from "chai";
import { findHorizontalMirror } from "../src/findHorizontalMirror";
import { findVerticalMirror } from "../src/findVerticalMirror";
import { findMirror } from "../src/findMirror";

describe("findHorizontalMirror", () => {
    it("should return horizontal 3 for second example pattern", () => {
        const pattern = [
            '#...##..#',
            '#....#..#',
            '..##..###',
            '#####.##.',
            '#####.##.',
            '..##..###',
            '#....#..#'
          ]
          expect(findMirror(pattern)).to.equal({horizontal: 3});
    });
    it("should return 4 for first example pattern", () => {
        const pattern = [
            '#.##..##.',
            '..#.##.#.',
            '##......#',
            '##......#',
            '..#.##.#.',
            '..##..##.',
            '#.#.##.#.'
          ]
        expect(findVerticalMirror(pattern)).to.equal(4);
    });
})