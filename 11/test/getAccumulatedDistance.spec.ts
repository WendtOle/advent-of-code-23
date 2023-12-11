import { expect } from "chai"
import { loadImage } from "../src/loadImage"
import { getAccumulatedDistance } from "../src/getAccumulatedDistance"
import { DistanceWithJumps } from "../src/types"

const toDistance = ({jumps, steps}: DistanceWithJumps, jumpFactor: number): number => {
    return (jumps * jumpFactor) + steps
}

describe("getAccumulatedDistance", () => {
    it("returns accumulated distance for first example", () => {
        const input = loadImage("11/data/example-1")
        const actual = getAccumulatedDistance(input)
        expect(toDistance(actual,2)).to.equal(374)
    })
    it("returns accumulated distance for actual puzzle", () => {
        const input = loadImage("11/data/puzzle")
        const actual = getAccumulatedDistance(input)
        expect(toDistance(actual,2)).to.equal(9795148)
    })
})