import { expect } from "chai"
import { getGalaxyPositions } from "../src/getGalaxyPositions"
import { loadImage } from "../src/loadImage"

describe("getGalaxyPositions", () => {
    it("returns some galaxy positions for example-1", () => {
        const someGalaxyPositions = [{x: 3, y: 0}, {x:0, y: 9}]
        const actual = getGalaxyPositions(loadImage("11/data/example-1"))
        expect(actual).to.deep.include.members(someGalaxyPositions)
    })
})