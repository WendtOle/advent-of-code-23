import { expect } from "chai";
import { getNeightbourField } from "../src/getNeightborField";

describe("getNeightbourField", () => {
    it("should return undefined for requested outer field", () => {
        const slope = { width: 3, height: 3, slopeString: "..." };
        const coords = { x: 0, y: 0 };
        const direction = { x: 0, y: -1 };
        const result = getNeightbourField(slope, coords, direction);
        expect(result).to.equal(undefined);
    });
    it("should return correct field", () => {
        const slope = { width: 3, height: 3, slopeString: "..." };
        const coords = { x: 0, y: 0 };
        const direction = { x: 0, y: 1 };
        const result = getNeightbourField(slope, coords, direction);
        expect(result).to.deep.equal({x: 0, y: 1});
    });
})
