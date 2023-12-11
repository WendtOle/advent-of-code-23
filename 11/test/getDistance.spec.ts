import { expect } from "chai"
import { loadImage } from "../src/loadImage"
import { getDistance } from "../src/getDistance"

describe("getDistance", () => {
    it("returns given distance between galaxy 5 and 9", () => {
        const input = loadImage("11/data/example-1-expanded")
        const actual = getDistance(input, 5, 9)
        expect(actual).to.equal(9)
    })
    it("returns given distance between galaxy 1 and 7", () => {
        const input = loadImage("11/data/example-1-expanded")
        const actual = getDistance(input, 1, 5)
        expect(actual).to.equal(15)
    })
    it("returns given distance between galaxy 3 and 6", () => {
        const input = loadImage("11/data/example-1-expanded")
        const actual = getDistance(input, 3, 6)
        expect(actual).to.equal(17)
    })
    it("returns given distance between galaxy 8 and 9", () => {
        const input = loadImage("11/data/example-1-expanded")
        const actual = getDistance(input, 8, 9)
        expect(actual).to.equal(5)
    })
})