import { expect } from "chai"
import { findStart } from "../src/findStart"
import { loadSlopeString } from "../src/loadSlopeString"

describe("findStart", () => {
    it("finds start of example", () => {
        const slopeString = loadSlopeString("./23/data/example")
        expect(findStart(slopeString)).to.deep.equal({x: 1, y: 0})
    })
})