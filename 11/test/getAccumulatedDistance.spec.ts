import { expect } from "chai"
import { loadImage } from "../src/loadImage"
import { getAccumulatedDistance } from "../src/getAccumulatedDistance"

describe("getAccumulatedDistance", () => {
    it("returns accumulated distance for first example", () => {
        const input = loadImage("11/data/example-1")
        const actual = getAccumulatedDistance(input)
        expect(actual).to.equal(374)
    })
    it("returns accumulated distance for actual puzzle", () => {
        const input = loadImage("11/data/puzzle")
        const actual = getAccumulatedDistance(input)
        expect(actual).to.equal(9795148)
    })
})