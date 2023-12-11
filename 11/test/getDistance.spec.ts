import { expect } from "chai"
import { loadImage } from "../src/loadImage"
import { getDistance } from "../src/getDistance"
import { getGalaxyPositions } from "../src/getGalaxyPositions"

const galaxyPositions = getGalaxyPositions(loadImage("11/data/example-1-expanded"))

describe("getDistance", () => {
    it("returns given distance between galaxy 5 and 9", () => {
        const actual = getDistance(galaxyPositions[5 - 1], galaxyPositions[9 - 1])
        expect(actual).to.equal(9)
    })
    it("returns given distance between galaxy 1 and 7", () => {
        const actual = getDistance(galaxyPositions[1 - 1], galaxyPositions[7 - 1])
        expect(actual).to.equal(15)
    })
    it("returns given distance between galaxy 3 and 6", () => {
        const actual = getDistance(galaxyPositions[3 - 1], galaxyPositions[6 - 1])
        expect(actual).to.equal(17)
    })
    it("returns given distance between galaxy 8 and 9", () => {
        const actual = getDistance(galaxyPositions[8 - 1], galaxyPositions[9 - 1])
        expect(actual).to.equal(5)
    })
})