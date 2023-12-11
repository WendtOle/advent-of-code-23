import { expect } from "chai"
import { loadImage } from "../src/loadImage"
import { getExpanded } from "../src/getExpanded"

describe("getExpanded", () => {
    it("expands example 1 correctly", () => {
        const input = loadImage("11/data/example-1")
        const expected = loadImage("11/data/example-1-expanded")
        const actual = getExpanded(input)
        expect(actual).to.equal(expected)
    })
})