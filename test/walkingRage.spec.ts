import { expect } from "chai";
import { walkingRange } from "../src/walkingRange";

describe("walking range", () => {
    it("should handle first example", () => {
        expect(walkingRange("example-1")).to.equal(4);
    }
    ),
    it("should handle first example", () => {
        expect(walkingRange("example-2")).to.equal(4);
    }
    ),
    it("should handle first example", () => {
        expect(walkingRange("example-3")).to.equal(8);
    }
    ),
    it("should handle first example", () => {
        expect(walkingRange("example-4")).to.equal(8);
    }
    )
})