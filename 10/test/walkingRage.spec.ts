import { expect } from "chai";
import { walkingRange } from "../src/walkingRange";

describe("walking range", () => {
    it("should handle first example", () => {
        expect(walkingRange("10/data/example-1")).to.equal(4);
    }
    ),
    it("should handle second example", () => {
        expect(walkingRange("10/data/example-2")).to.equal(4);
    }
    ),
    it("should handle third example", () => {
        expect(walkingRange("10/data/example-3")).to.equal(8);
    }
    ),
    it("should handle fourth example", () => {
        expect(walkingRange("10/data/example-4")).to.equal(8);
    }
    )
    it("should handle fifth example", () => {
        expect(walkingRange("10/data/example-5")).to.equal(6897);
    }
    )
})