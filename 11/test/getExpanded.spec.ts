import { expect } from "chai"
import { loadImage } from "../src/loadImage"
import { getExpanded } from "../src/getExpanded"
import { SpaceType } from "../src/types"

describe("getExpanded", () => {
    it("expands example 1 correctly", () => {
        const input = loadImage("11/data/example-1")
        const expected = loadImage("11/data/example-1-expanded")
        const actual = getExpanded(input)
        expect(actual).to.deep.equal(expected)
    })
    it("expands single entry correctly", () => {
        const input = [[SpaceType.EMPTY]]
        const expected = [[SpaceType.EMPTY, SpaceType.EMPTY], [SpaceType.EMPTY, SpaceType.EMPTY]]
        const actual = getExpanded(input)
        expect(actual).to.deep.equal(expected)
    })
})